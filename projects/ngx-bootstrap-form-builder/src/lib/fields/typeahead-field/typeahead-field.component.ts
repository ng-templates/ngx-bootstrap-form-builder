import { Component, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { TypeaheadField } from '../../types';

@Component({
  selector: 'ngx-typeahead-field',
  templateUrl: './typeahead-field.component.html',
  styles: [ ':host{ display: block; width: 100%; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TypeaheadFieldComponent,
      multi: true,
    },
  ]
})
export class TypeaheadFieldComponent  implements ControlValueAccessor {

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;

  @Input() field!: TypeaheadField;
  focus$ = new Subject<string>();
	click$ = new Subject<string>();
  value: any;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
		const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
		const inputFocus$ = this.focus$;

    let observer;
    if(this.field.showOnFocus){
      observer = merge(debouncedText$, inputFocus$, clicksWithClosedPopup$)
    } else{
      observer = debouncedText$;
    }

		return observer.pipe(
			map((term) =>{
				return (term.length > this.field.charLength ?
          (this.field.options || []).filter((v) => {
          const value = this.field.selectedKey ? [this.field.selectedKey]: v
          return value.toLowerCase().indexOf(term.toLowerCase()) > -1;
        }): []).slice(0, this.field.limit)
      })
		);
	};

  // CONTROL VALUE ACCESSOR INTERFACE START
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: any) { this.value = value || null; }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
  setDisabledState(disabled: boolean) { this.field.disabled = disabled; }
  // CONTROL VALUE ACCESSOR INTERFACE END
}

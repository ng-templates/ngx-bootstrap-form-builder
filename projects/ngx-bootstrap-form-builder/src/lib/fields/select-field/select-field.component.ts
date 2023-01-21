import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectField } from '../../types';
import { IKeyValue } from './../../types/key-value';

@Component({
  selector: 'ngx-select-field',
  templateUrl: './select-field.component.html',
  styles: [ ':host{ display: block; width: 100%; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectFieldComponent,
      multi: true,
    },
  ]
})
export class SelectFieldComponent implements ControlValueAccessor {
  @Input() field!: SelectField;

  set value(val: IKeyValue){
    this.onChange(val)
  }

  // CONTROL VALUE ACCESSOR INTERFACE START
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: any) { this.value = value || null; }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
  setDisabledState(disabled: boolean) { this.field.disabled = disabled; }
  // CONTROL VALUE ACCESSOR INTERFACE END
}

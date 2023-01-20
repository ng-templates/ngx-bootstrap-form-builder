import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { InputField } from '../../types';

@Component({
  selector: 'ngx-input-field',
  templateUrl: './input-field.component.html',
  styles: [ ':host{ display: block; width: 100%; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
  ]
})
export class InputFieldComponent<T> implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() field!: InputField;

  set value(val: T){
    this.onChange(val)
  }

  search$ = new Subject<string>();
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    if(this.field.debounceTime){
      this.onSearch();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private onSearch(){
    this.search$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    )
    .subscribe(str => {
      this.onChange(str);
    })
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

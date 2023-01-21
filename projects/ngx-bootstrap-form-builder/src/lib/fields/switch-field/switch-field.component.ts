import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SwitchField } from '../../types/checkbox';

@Component({
  selector: 'ngx-switch-field',
  templateUrl: './switch-field.component.html',
  styleUrls: ['./switch-field.component.scss'],
  styles: [ ':host{ display: block; width: 100%; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchFieldComponent,
      multi: true,
    },
  ]
})
export class SwitchFieldComponent implements ControlValueAccessor{

  @Input() field!: SwitchField;

  set value(val: boolean){
    this.onChange(val)
  }

  // CONTROL VALUE ACCESSOR INTERFACE START
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: boolean) { this.value = value || false; }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
  setDisabledState(disabled: boolean) { this.field.disabled = disabled; }
  // CONTROL VALUE ACCESSOR INTERFACE END
}

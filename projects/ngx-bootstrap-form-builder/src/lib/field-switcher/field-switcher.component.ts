import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../types';
import { FIELD_TYPES } from '../types/field-types';

@Component({
  selector: 'ngx-field-switcher',
  templateUrl: './field-switcher.component.html'
})
export class FieldSwitcherComponent<T> {

  @Input() field!: FormField;
  @Input() form!: FormGroup;
  @Output() change$ = new EventEmitter<{value: T, field: FormField}>()

  fieldTypes = FIELD_TYPES;

  get isDirty() { return this.form.controls[this.field.key]?.dirty }
  get isTouched() { return this.form.controls[this.field.key]?.touched }
  get isValid() { return this.form.controls[this.field.key]?.valid }
  get isInValid() { return this.form.controls[this.field.key]?.invalid }
  get value() { return this.form.controls[this.field.key]?.value }

  getErrors(){
    const errors = {...this.form.controls[this.field.key]?.errors};
    delete errors['required'];
    return Object.values(errors);
  }

  getRequiredError(){
    return this.form.controls[this.field.key]?.errors?.['required'];
  }

  onValueChange(value: T, field: FormField){
    this.change$.next({value, field});
  }
}

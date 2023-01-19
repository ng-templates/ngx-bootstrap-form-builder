import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../types';

@Component({
  selector: 'ngx-field-switcher',
  templateUrl: './field-switcher.component.html'
})
export class FieldSwitcherComponent<T> {

  @Input() question!: FormField;
  @Input() form!: FormGroup;
  @Output() change$ = new EventEmitter<{value: T, question: FormField}>()

  get isDirty() { return this.form.controls[this.question.key]?.dirty }
  get isTouched() { return this.form.controls[this.question.key]?.touched }
  get isValid() { return this.form.controls[this.question.key]?.valid }
  get isInValid() { return this.form.controls[this.question.key]?.invalid }
  get value() { return this.form.controls[this.question.key]?.value }

  constructor() { }

  getErrors(){
    const errors = {...this.form.controls[this.question.key]?.errors};
    delete errors['required'];
    return Object.values(errors);
  }

  getRequiredError(){
    return this.form.controls[this.question.key]?.errors?.['required'];
  }

  onValueChange(value: T, question: FormField){
    this.change$.next({value, question});
  }
}

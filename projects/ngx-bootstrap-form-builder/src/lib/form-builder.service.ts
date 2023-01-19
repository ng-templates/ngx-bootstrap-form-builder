import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from './types';

@Injectable()
export class NgxBootstrapFormBuilderService {

  toFormGroup(questions: FormField[]) {
    const group: {[key: string]: FormControl} = {};
    questions.forEach((question) => {
      group[question.key] = this.createFormControl(question);
    });
    return new FormGroup(group);
  }

  createFormGroup(question: FormField) {
    return new FormGroup({
      [question.key]: this.createFormControl(question),
    });
  }

  getValue(question: FormField) {
    switch (question.type) {
      case 'checkbox':
        return Boolean(question.value || false);
      case 'number':
        return Number(question.value || 0);
      default:
        return question.value;
    }
  }

  private createFormControl(question: FormField) {

    if (question.required) {
      question.validators.push(Validators.required);
    }

    return new FormControl(
      {
        value: this.getValue(question),
        disabled: question.disabled,
      },
      {
        validators: question.validators,
        updateOn: question.updateOn,
      }
    );
  }
}

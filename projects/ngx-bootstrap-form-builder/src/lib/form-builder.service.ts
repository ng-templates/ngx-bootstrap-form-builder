import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from './types';

@Injectable()
export class NgxBootstrapFormBuilderService {

  toFormGroup(fields: FormField[]) {
    const group: {[key: string]: FormControl} = {};
    fields.forEach((field) => {
      group[field.key] = this.createFormControl(field);
    });
    return new FormGroup(group);
  }

  createFormGroup(field: FormField) {
    return new FormGroup({
      [field.key]: this.createFormControl(field),
    });
  }

  getValue(field: FormField) {
    switch (field.type) {
      case 'checkbox':
        return Boolean(field.value || false);
      case 'number':
        return Number(field.value || 0);
      default:
        return field.value;
    }
  }

  private createFormControl(field: FormField) {

    if (field.required) {
      field.validators.push(Validators.required);
    }

    return new FormControl(
      {
        value: this.getValue(field),
        disabled: field.disabled,
      },
      {
        validators: field.validators,
        updateOn: field.updateOn,
      }
    );
  }
}

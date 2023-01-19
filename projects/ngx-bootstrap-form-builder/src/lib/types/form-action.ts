import { FormGroup } from '@angular/forms';
import { FormField } from './form-field';

export interface IFormActionItem<T> {
  class?: string;
  icon?: string;
  text?: string;
  loading?: boolean;
  event?: (args: IFormActionItemEvent) => void;
}

export interface IFormItemEvent<T> {
  value: T;
  question?: FormField;
  caller?: FormField;
  form?: FormGroup;
}

export interface IFormActionItemEvent {
  question: FormField;
  form: FormGroup;
}

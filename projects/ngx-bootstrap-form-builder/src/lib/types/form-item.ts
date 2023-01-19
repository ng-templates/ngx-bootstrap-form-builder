import { ValidatorFn } from '@angular/forms';
import { IFormActionItem, IFormItemEvent } from './form-action';

export interface IFormItem<T> {
  id?: string;
  value?: T;
  key?: string;
  label?: string;
  title?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  validators?: ValidatorFn[];
  classes?: string;
  updateOn?: 'blur' | 'change' | 'submit';
  connectedTo?: string[];
  tooltip?: string;
  background?: string;
  event?: (args: IFormItemEvent<T>) => void;
}

export class FormItem<T> {
  id?: string;
  value: T | undefined;
  key: string;
  label: string;
  title?: string;
  required: boolean;
  readonly: boolean;
  validators: ValidatorFn[] = [];
  hidden?: boolean;
  updateOn: 'blur' | 'change' | 'submit' = 'change';
  order: number;
  controlType: string;
  type: string;
  classes: string;
  disabled!: boolean;
  connectedTo?: string[];
  sort?: string;
  apiUrl?: string;
  tooltip?: string;
  background?: string;
  event?: (args: IFormItemEvent<T>) => void;

  constructor(options: IFormItem<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.title = options.title || '';
    this.readonly = !!options.readonly;
    this.required = !!options.required;
    this.hidden = !!options.hidden;
    this.disabled = !!options.disabled || false;
    this.validators = options.validators || [];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.tooltip = options.tooltip|| '';
    this.classes = options.classes || '';
    this.updateOn = options.updateOn || 'change';
    this.connectedTo = options.connectedTo;
    this.background = options.background;
    this.event = options.event;
  }
}

export interface IFormInput<T> extends IFormItem<T> {
  min?: number | string;
  max?: number | string;
  placeholder?: string;
  suffix?: IFormActionItem<T>;
  prefix?: IFormActionItem<T>;
}

export class FormInput<T> extends FormItem<T> {
  min?: number | string;
  max?: number | string;
  placeholder?: string;
  suffix?: IFormActionItem<T>;
  prefix?: IFormActionItem<T>;

  constructor(options: IFormItem<T> & IFormInput<T> = {}) {
    super(options);
    this.min = options.min;
    this.max = options.max;
    this.placeholder = options.placeholder || '';
    this.prefix = options.prefix;
    this.suffix = options.suffix;
  }
}

import { FormField } from './form-field';

export interface IFormBuilder {
  class?: string;
  style?: FORM_STYLE;
  fields: FormField[];
}

export class NgxFormBuilder {
  class?: string;
  style?: FORM_STYLE;
  fields!: FormField[];

  constructor(options: IFormBuilder) {
    this.class = options.class;
    this.style = options.style || FORM_STYLE.default;
    this.fields = options.fields || [];
  }
}

export enum FORM_STYLE {
  default,
  horizontal
}

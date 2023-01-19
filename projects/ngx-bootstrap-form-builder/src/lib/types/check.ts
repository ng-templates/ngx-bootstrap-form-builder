import { FormInput, IFormInput } from "./form-item";

export class CheckGroup extends FormInput<any> {
  override controlType = 'check-group';
  options?: { key: string; value: any }[];
  selectValue?: boolean;
  constructor(
    options: IFormInput<string> & {
      options: { key: string; value: any }[];
      selectValue?: boolean;
    }
  ) {
    super(options);
    this.options = options.options || [];
    this.selectValue = options.selectValue || false;
  }
}

export class RadioGroup extends FormInput<any> {
  override controlType = 'radio-group';
  options?: { key: string; value: any }[];
  selectValue?: boolean;
  constructor(
    options: IFormInput<string> & {
      options: { key: string; value: any }[];
      selectValue?: boolean;
    }
  ) {
    super(options);
    this.options = options.options || [];
    this.selectValue = options.selectValue || false;
  }
}

import { FormInput, IFormInput } from './form-item';

export class SelectField extends FormInput<string> {
  override controlType = 'select';
  options?: { key: string; value: any }[] = [];
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

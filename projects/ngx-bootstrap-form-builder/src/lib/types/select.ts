import { FIELD_TYPES } from './field-types';
import { FormInput, IFormInput } from './form-item';

export class SelectField extends FormInput<string | number | unknown> {

  override controlType = FIELD_TYPES.select;
  options?: { key: string; value: any }[] = [];
  selectValue?: boolean;

  constructor(
    options: IFormInput<string | number | unknown> & {
      options: { key: string; value: any }[];
      selectValue?: boolean;
    }
  ) {
    super(options);
    this.options = options.options || [];
    this.selectValue = options.selectValue || false;
  }
}

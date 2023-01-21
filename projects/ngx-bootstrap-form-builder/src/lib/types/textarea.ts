import { FIELD_TYPES } from './field-types';
import { FormInput, IFormInput } from './form-item';

export class TextAreaField extends FormInput<string> {
  override controlType = FIELD_TYPES.textarea;
  rows?: number;

  constructor(
    options: IFormInput<string> & {
      rows?: number;
    }
  ) {
    super(options);
    this.rows = options.rows || 3;
  }
}

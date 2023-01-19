
import { FormInput, IFormInput } from "./form-item";

export class InputField extends FormInput<string | number> {
  override controlType = 'textbox';
}

export class DebounceInputField extends FormInput<string | number> {
  override controlType = 'debounce';
}

export class TextAreaField extends FormInput<string> {
  override controlType = 'textarea';
  rows?: number;

  constructor(
    options: IFormInput<string> & {
      rows?: number
    }
  ){
    super(options);
    this.rows = options.rows || 3
  }
}

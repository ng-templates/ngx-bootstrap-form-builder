
import { FIELD_TYPES } from "./field-types";
import { FormInput, IFormInput } from "./form-item";

export class InputField extends FormInput<string | number> {
  override controlType = FIELD_TYPES.input;
  debounceTime?: number;

  constructor(
    options: IFormInput<string | number> & {
      debounceTime?: number;
    }
  ){
    super(options);
    this.debounceTime = options.debounceTime
  }
}

import { FIELD_TYPES } from "./field-types";
import { FormField } from "./form-field";
import { FormInput, IFormInput } from "./form-item";

export class GroupField extends FormInput<string | number> {
  override controlType = FIELD_TYPES.group;
  formFields?: FormField[]

  constructor(
    options: IFormInput<string | number> & {
      formFields?: FormField[];
    }
  ) {
    super(options);
    this.formFields = options.formFields || [];
  }
}

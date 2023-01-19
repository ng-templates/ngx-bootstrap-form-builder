import { FormField } from "./form-field";
import { FormInput, IFormInput } from "./form-item";

export class GroupField extends FormInput<string | number> {
  override controlType = 'group';
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

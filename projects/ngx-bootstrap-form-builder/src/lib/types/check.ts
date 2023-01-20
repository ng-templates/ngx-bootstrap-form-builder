import { FIELD_TYPES } from "./field-types";
import { FormInput, IFormInput } from "./form-item";

export class CheckGroup extends FormInput<any> {
  override controlType = FIELD_TYPES.checkGroup;
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

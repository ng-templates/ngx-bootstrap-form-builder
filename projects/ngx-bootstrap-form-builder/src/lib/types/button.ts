
import { FIELD_TYPES } from "./field-types";
import { IFormActionItemEvent } from "./form-action";
import { FormInput, IFormInput } from "./form-item";

export class ButtonField extends FormInput<unknown> {
  override controlType = FIELD_TYPES.button;
  action!: (args: IFormActionItemEvent)=> void;
  constructor(
    options: IFormInput<unknown> & {
      action: (args: IFormActionItemEvent)=> void;
    }
  ) {
    super(options);
    this.action = options.action || undefined;
  }
}

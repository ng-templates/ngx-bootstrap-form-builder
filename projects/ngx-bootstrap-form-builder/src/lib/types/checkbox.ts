import { FormInput, IFormInput } from "./form-item";

export class CheckboxField extends FormInput<boolean> {
  override controlType = 'checkbox';
  slot?: 'start' | 'end';
  constructor(
    options: IFormInput<boolean> & {
      slot: 'start' | 'end';
    }
  ) {
    super(options);
    this.slot = options.slot || 'start';
  }
}

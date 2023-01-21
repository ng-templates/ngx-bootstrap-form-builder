import { FIELD_TYPES } from "./field-types";
import { FormInput, IFormInput } from "./form-item";

export class CheckboxField extends FormInput<boolean> {
  override controlType = FIELD_TYPES.checkbox;
  slot?: 'start' | 'end';
  constructor(
    options: IFormInput<boolean> & {
      slot?: 'start' | 'end';
    }
  ) {
    super(options);
    this.slot = options.slot || 'start';
  }
}


export class SwitchField extends FormInput<boolean> {
  override controlType = FIELD_TYPES.switch;
  slot?: 'start' | 'end';
  labelDefault?: string;
  labelChecked?: string;

  constructor(
    options: IFormInput<boolean> & {
      slot?: 'start' | 'end';
      labelDefault?: string;
      labelChecked?: string;
    }
  ) {
    super(options);
    this.slot = options.slot || 'start';
    this.labelChecked = options.labelChecked || '';
    this.labelDefault = options.labelDefault || '';
  }
}

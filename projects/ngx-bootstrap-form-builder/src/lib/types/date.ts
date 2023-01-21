import { FIELD_TYPES } from './field-types';
import { FormInput, IFormInput } from './form-item';

export class DateField extends FormInput<string> {
  override controlType = FIELD_TYPES.date;
  presentation?: 'date-time'| 'time-date' | 'date';
  constructor(
    options: IFormInput<string> & {
      presentation?: 'date-time'| 'time-date' | 'date';
    }
  ) {
    super(options);
    this.presentation = options.presentation || 'date';
  }
}

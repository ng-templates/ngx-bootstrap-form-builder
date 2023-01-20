import { FIELD_TYPES } from './field-types';

import { FormInput, IFormInput } from "./form-item";

export class FileField extends FormInput<string> {
  override controlType = FIELD_TYPES.file;
  progress?: number;
  multiple?: boolean;

  constructor(
    options: IFormInput<string> & {
      progress?: number;
      multiple?: boolean;
    }
  ){
    super(options);
    this.progress = options.progress || 0;
    this.multiple = options.multiple || false;
  }
}

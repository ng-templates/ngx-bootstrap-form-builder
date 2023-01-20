
import { Placement } from "@ng-bootstrap/ng-bootstrap";
import { FIELD_TYPES } from "./field-types";
import { FormInput, IFormInput } from "./form-item";

export class TypeaheadField extends FormInput<string> {
  override controlType = FIELD_TYPES.typeahead;
  placement: Placement;
  container: 'body' | '';
  selectedKey?: string;
  options: any[] = [];
  limit: number;
  charLength: number;
  showOnFocus?: boolean;

  constructor(
    options: IFormInput<string> & {
      placement?: Placement;
      container?: 'body' | '';
      selectedKey?: string;
      options: any[];
      showOnFocus?: boolean;
      limit?: number;
      charLength?: number;
    }
  ){
    super(options);
    this.placement = options.placement || 'bottom-start';
    this.container = options.container || '';
    this.selectedKey = options.selectedKey;
    this.showOnFocus = options.showOnFocus;
    this.limit = options.limit || 10;
    this.charLength = options.charLength || 0;
    this.options = options.options || [];
  }
}

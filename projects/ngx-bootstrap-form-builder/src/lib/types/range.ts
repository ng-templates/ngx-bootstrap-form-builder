import { FormInput, IFormInput } from "./form-item";

export class RangeField extends FormInput<string | number> {
  override controlType = 'range';
  dualKnobs?: boolean;
  pinFormatter?: (value: number) => string;
  ticks?: boolean;
  snaps?: boolean;
  showLabels?: boolean;

  constructor(
    options: IFormInput<string | number> & {
      dualKnobs?: boolean;
      pinFormatter?: (value: number) => string;
      ticks?: boolean;
      snaps?: boolean;
      showLabels?: boolean;
    }
  ) {
    super(options);
    this.dualKnobs = options.dualKnobs || false;
    this.pinFormatter = options.pinFormatter || undefined;
    this.ticks = options.ticks || false;
    this.snaps = options.snaps || false;
    this.showLabels = options.showLabels || false;
  }

}

import { FormInput, IFormInput } from "./form-item";

export class LocationField extends FormInput<any> {
  override controlType = 'location-input';
  placeTypes?: string[];  //https://developers.google.com/maps/documentation/javascript/supported_types
  constructor(
    options: IFormInput<string> & {
      placeTypes?: string[]
    }
  ) {
    super(options);
    this.placeTypes = options.placeTypes || ['(cities)'];
  }
}


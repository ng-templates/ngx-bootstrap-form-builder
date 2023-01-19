import { FormInput, IFormInput } from './form-item';

export class SearchField<T> extends FormInput<string | T> {

  override controlType = 'search';
  onSearch!: (val: string) => Promise<(T& {text: string})[]>;
  debounceTime?: number;
  // selectValue?: string;

  constructor(
    options: IFormInput<string | T> & {
      // selectValue?: string;
      onSearch: (val: string) => Promise<(T& {text: string})[]>;
      debounceTime?: number;
    }
  ) {
    super(options);
    // this.selectValue = options.selectValue || '';
    this.debounceTime = options.debounceTime || 600;
    this.onSearch = options.onSearch || undefined;
    this.suffix = {
      event: ({ question, form }) =>
      form.controls[question.key].patchValue(''),
    },
    this.prefix = { icon: 'bi-search' },
    this.event = ({ value, question }) => {
      if(question?.suffix){
        if (value) question.suffix.icon = 'x-lg';
        else question.suffix.icon = undefined;
      }
    }
  }
}

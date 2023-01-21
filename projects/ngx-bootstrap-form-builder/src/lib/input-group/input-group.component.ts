import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../types';

@Component({
  selector: 'ngx-input-group',
  templateUrl: './input-group.component.html'
})
export class InputGroupComponent {

  @Input() field!: FormField;
  @Input() form!: FormGroup;
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FieldSwitcherComponent } from './field-switcher/field-switcher.component';
import {
  CheckGroupFieldComponent,
  DropdownFieldComponent,
  InputFieldComponent,
  SwitchFieldComponent
} from './fields';
import { FileFieldComponent } from './fields/file-field/file-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { NgxBootstrapFormBuilderService } from './form-builder.service';
import { NgxBootstrapFormBuilderComponent } from './form-builder/form-builder.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { TypeaheadFieldComponent } from './fields/typeahead-field/typeahead-field.component';

const FIELDS = [
  InputFieldComponent,
  DropdownFieldComponent,
  CheckGroupFieldComponent,
  SwitchFieldComponent,
  FileFieldComponent,
  SelectFieldComponent,
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  NgbTypeaheadModule,
  FormsModule,
];

@NgModule({
  declarations: [
    ...FIELDS,
    NgxBootstrapFormBuilderComponent,
    FieldSwitcherComponent,
    InputGroupComponent,
    TypeaheadFieldComponent,
  ],
  imports: [...MODULES],
  exports: [
    NgxBootstrapFormBuilderComponent,
    FieldSwitcherComponent,
    InputGroupComponent,
    ...FIELDS,
    ...MODULES,
  ],
  providers: [NgxBootstrapFormBuilderService],
})
export class NgxBootstrapFormBuilderModule {}

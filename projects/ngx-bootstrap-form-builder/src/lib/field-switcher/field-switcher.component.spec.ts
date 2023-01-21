import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputField } from '@ngx-bootstrap-form-builder/public-api';
import { TEST_IMPORTS } from '../../tests/import';
import { FileFieldComponent } from './../fields/file-field/file-field.component';
import { InputFieldComponent } from './../fields/input-field/input-field.component';

import { SelectFieldComponent, SwitchFieldComponent } from '../fields';
import { InputGroupComponent } from '../input-group/input-group.component';
import { NgxFormBuilder } from '../types';
import { FieldSwitcherComponent } from './field-switcher.component';

describe('FieldSwitcherComponent', <T>() => {
  let component: FieldSwitcherComponent<T>;
  let fixture: ComponentFixture<FieldSwitcherComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      TEST_IMPORTS([
        FieldSwitcherComponent,
        InputGroupComponent,
        InputFieldComponent,
        SwitchFieldComponent,
        FileFieldComponent,
        SelectFieldComponent,
      ])
    ).compileComponents();

    fixture = TestBed.createComponent(FieldSwitcherComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('with form defined', () => {

    const form: NgxFormBuilder = {
      fields: [
        new InputField({
          key: 'name',
          label: 'label'
        })
      ]
    }

    it('should have a form', () => {
      // expect(component.form instanceof FormGroup).toBeTruthy();
      // fixture.debugElement.query('ngx-input-field')
      // expect().toBe();
    });
  });

});

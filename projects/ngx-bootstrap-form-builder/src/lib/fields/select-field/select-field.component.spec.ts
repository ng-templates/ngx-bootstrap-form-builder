import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_IMPORTS } from 'projects/ngx-bootstrap-form-builder/src/tests/import';

import { SelectField } from '../../types';
import { SelectFieldComponent } from './select-field.component';

describe('SelectFieldComponent', () => {
  let component: SelectFieldComponent;
  let fixture: ComponentFixture<SelectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(TEST_IMPORTS([SelectFieldComponent]))
    .compileComponents();

    fixture = TestBed.createComponent(SelectFieldComponent);
    component = fixture.componentInstance;
    component.field = new SelectField({
      key: 'name',
      label: 'label',
      options: []
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

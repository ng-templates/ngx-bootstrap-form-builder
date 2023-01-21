import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputField } from '../../types';
import { TEST_IMPORTS } from './../../../tests/import';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', <T>() => {
  let component: InputFieldComponent<T>;
  let fixture: ComponentFixture<InputFieldComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(TEST_IMPORTS([InputFieldComponent]))
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldComponent<T>);
    component = fixture.componentInstance;
    component.field = new InputField({
      key: 'name',
      label: 'label'
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

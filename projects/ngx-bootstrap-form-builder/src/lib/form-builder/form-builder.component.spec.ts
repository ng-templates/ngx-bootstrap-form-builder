import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_IMPORTS } from '../../tests/import';
import { InputField } from '../types';

import { NgxBootstrapFormBuilderComponent } from './form-builder.component';

describe('NgxBootstrapFormBuilderComponent', <T>() => {
  let component: NgxBootstrapFormBuilderComponent<T>;
  let fixture: ComponentFixture<NgxBootstrapFormBuilderComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(TEST_IMPORTS([NgxBootstrapFormBuilderComponent<T>]))
    .compileComponents();

    fixture = TestBed.createComponent(NgxBootstrapFormBuilderComponent);
    component = fixture.componentInstance;
    component.builder = {
      fields: [
        new InputField({
          key: 'name',
          label: 'label'
        })
      ]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_IMPORTS } from '../../tests/import';
import { InputField } from '../types';

import { InputGroupComponent } from './input-group.component';

describe('InputGroupComponent', () => {
  let component: InputGroupComponent;
  let fixture: ComponentFixture<InputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(TEST_IMPORTS([InputGroupComponent]))
    .compileComponents();

    fixture = TestBed.createComponent(InputGroupComponent);
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

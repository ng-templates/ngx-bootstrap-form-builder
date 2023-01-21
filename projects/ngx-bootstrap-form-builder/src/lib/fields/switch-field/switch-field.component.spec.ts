import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST_IMPORTS } from 'projects/ngx-bootstrap-form-builder/src/tests/import';
import { SwitchField } from '../../types';

import { SwitchFieldComponent } from './switch-field.component';

describe('SwitchFieldComponent', () => {
  let component: SwitchFieldComponent;
  let fixture: ComponentFixture<SwitchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(TEST_IMPORTS([SwitchFieldComponent]))
    .compileComponents();

    fixture = TestBed.createComponent(SwitchFieldComponent);
    component = fixture.componentInstance;
    component.field = new SwitchField({
      key: 'name',
      label: 'label',
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

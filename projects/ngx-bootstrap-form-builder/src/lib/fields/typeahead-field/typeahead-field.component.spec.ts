import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TEST_IMPORTS } from 'projects/ngx-bootstrap-form-builder/src/tests/import';
import { TypeaheadField } from '../../types';

import { TypeaheadFieldComponent } from './typeahead-field.component';

describe('TypeaheadFieldComponent', () => {
  let component: TypeaheadFieldComponent;
  let fixture: ComponentFixture<TypeaheadFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      TEST_IMPORTS([TypeaheadFieldComponent], [], [NgbTypeaheadModule])
    ).compileComponents();

    fixture = TestBed.createComponent(TypeaheadFieldComponent);
    component = fixture.componentInstance;
    component.field = new TypeaheadField({
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

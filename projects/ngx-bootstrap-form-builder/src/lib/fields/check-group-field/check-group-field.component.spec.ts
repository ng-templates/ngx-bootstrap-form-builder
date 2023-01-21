import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGroupFieldComponent } from './check-group-field.component';

describe('CheckGroupFieldComponent', () => {
  let component: CheckGroupFieldComponent;
  let fixture: ComponentFixture<CheckGroupFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckGroupFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckGroupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

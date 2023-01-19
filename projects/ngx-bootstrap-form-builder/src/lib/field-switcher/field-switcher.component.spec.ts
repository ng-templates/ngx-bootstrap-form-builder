import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSwitcherComponent } from './field-switcher.component';

describe('FieldSwitcherComponent', () => {
  let component: FieldSwitcherComponent;
  let fixture: ComponentFixture<FieldSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', <T>() => {
  let component: InputFieldComponent<T>;
  let fixture: ComponentFixture<InputFieldComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

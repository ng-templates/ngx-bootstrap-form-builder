import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { NgxBootstrapFormBuilderService } from '../form-builder.service';
import { removeUndefinedProps } from '../helpers/utils';
import { FormBuilder, FormField } from '../types';
import { FORM_STYLE } from './../types/form-builder';

@Component({
  exportAs: 'form',
  selector: 'ngx-bootstrap-form-builder',
  templateUrl: 'form-builder.component.html'
})
export class NgxBootstrapFormBuilderComponent<T> implements OnChanges, OnDestroy {

  @ViewChild('ngForm') ngForm!: NgForm;

  @Input() builder!: FormBuilder;
  @Output() formSubmit = new EventEmitter();
  @Output() valueChanges = new EventEmitter();
  @Output() statusChanges = new EventEmitter();

  form!: FormGroup;
  style = FORM_STYLE;

  private destroy$ = new Subject<void>();

  get invalid() {
    return this.form?.status === 'INVALID';
  }

  get disabled() {
    return this.form?.status === 'DISABLED';
  }

  get submitted(){
    return this.ngForm?.submitted || false;
  }

  get value() {
    const formData = this.form?.getRawValue();
    if (formData && !this.invalid) {
      this.builder.fields
        ?.filter((x) => x.type === 'number')
        .forEach((numericField) => {
          formData[numericField.key] = +formData[numericField.key];
        });

      return removeUndefinedProps(formData);
    } return;
  }

  constructor(private fbs: NgxBootstrapFormBuilderService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['builder']) {

      const { currentValue, previousValue } = changes['builder'];

      if (currentValue && currentValue !== previousValue) {

        this.form = this.fbs.toFormGroup(this.builder.fields as FormField[]);

        this.form?.statusChanges
          .pipe(
            tap((status) => this.statusChanges.emit(status)),
            takeUntil(this.destroy$)
          ).subscribe();

          this.form?.valueChanges.pipe(
            tap((value) => this.valueChanges.emit(value)),
            takeUntil(this.destroy$)
          ).subscribe();
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEvent(data: { value: any; field: FormField }) {
    const { value, field } = data;
    const dependantFields = this.builder.fields?.filter((item) =>
      field.connectedTo?.includes(item.key) || item.key === field.key
    );
    (dependantFields || []).forEach((caller) => {
      if (dependantFields && caller.event) {
        caller.event({value, field, caller, form: this.form});
      }
    });
  }

}

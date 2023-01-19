import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { NgxBootstrapFormBuilderService } from '../form-builder.service';
import { removeUndefinedProps } from '../helpers/utils';
import { FormField } from '../types';

@Component({
  selector: 'ngx-bootstrap-form-builder',
  templateUrl: 'form-builder.component.html'
})
export class NgxBootstrapFormBuilderComponent implements OnChanges, OnDestroy {

  @ViewChild('ngForm') ngForm!: NgForm;

  @Input() questions: FormField[] = [];
  @Output() formSubmit = new EventEmitter();
  @Output() valueChanges = new EventEmitter();
  @Output() statusChanges = new EventEmitter();

  form!: FormGroup;

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
      this.questions
        ?.filter((x) => x.type === 'number')
        .forEach((numericQuestion) => {
          formData[numericQuestion.key] = +formData[numericQuestion.key];
        });

      return removeUndefinedProps(formData);
    } return;
  }

  constructor(private fbs: NgxBootstrapFormBuilderService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions']) {

      const { currentValue, previousValue } = changes['questions'];

      if (currentValue && currentValue !== previousValue) {

        this.form = this.fbs.toFormGroup(this.questions as FormField[]);

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

  onEvent(data: { value: any; question: FormField }) {
    const { value, question } = data;
    const dependantQuestions = this.questions?.filter((item) =>
      question.connectedTo?.includes(item.key) || item.key === question.key
    );
    (dependantQuestions || []).forEach((caller) => {
      if (dependantQuestions && caller.event) {
        caller.event({value, question, caller, form: this.form});
      }
    });
  }

}

import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileField } from '../../types';

@Component({
  selector: 'ngx-file-field',
  templateUrl: './file-field.component.html',
  styles: [ ':host{ display: block; width: 100%; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileFieldComponent,
      multi: true
    }
  ]
})
export class FileFieldComponent implements ControlValueAccessor {

  @Input() field!: FileField;
  files: File | File[] | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    let files: File | File[] = Array.prototype.slice.call(event);
    files = this.field.multiple ? files : files[0];
    this.onChange(files);
    this.files = files;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {}

  // CONTROL VALUE ACCESSOR INTERFACE START
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: any) {
    this.host.nativeElement.value = '';
    this.files = null;
  }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
  setDisabledState(disabled: boolean) { this.field.disabled = disabled; }
  // CONTROL VALUE ACCESSOR INTERFACE END

}

import { Component, OnInit } from '@angular/core';
import { FileField, InputField, NgxFormBuilder, SelectField, TypeaheadField } from '@ngx-bootstrap-form-builder/public-api';
import { states } from '../../assets/data/states';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  builder!: NgxFormBuilder;

  ngOnInit(): void {
    this.builder = this.buildForm();
  }

  buildForm(): NgxFormBuilder {
    return {
      fields: [
        new InputField({
          key: 'input',
          label: 'Input field'
        }),
        new SelectField({
          key: 'select',
          label: 'Select field',
          options: [{key: 'one', value: 1},{key: 'two', value: 2}],
          value: '2'
        }),
        new FileField({
          key: 'File',
          label: 'File field',
        }),
        new TypeaheadField({
          key: 'typeahead',
          label: 'Typeahead field',
          options: states
        })
      ]
    }
  }

  log(data: any){
    console.log(data)
  }

}

import { TestBed } from '@angular/core/testing';

import { NgxBootstrapFormBuilderService } from './form-builder.service';

describe('NgxBootstrapFormBuilderService', () => {
  let service: NgxBootstrapFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBootstrapFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

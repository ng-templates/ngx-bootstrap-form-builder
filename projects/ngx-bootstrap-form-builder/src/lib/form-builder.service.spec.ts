import { TestBed } from '@angular/core/testing';
import { TEST_IMPORTS } from '../tests/import';

import { NgxBootstrapFormBuilderService } from './form-builder.service';

describe('NgxBootstrapFormBuilderService', () => {
  let service: NgxBootstrapFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule(TEST_IMPORTS([], [NgxBootstrapFormBuilderService]));
    service = TestBed.inject(NgxBootstrapFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

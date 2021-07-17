import { TestBed } from '@angular/core/testing';

import { InAppOperationsService } from './in-app-operations.service';

describe('InAppOperationsService', () => {
  let service: InAppOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InAppOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

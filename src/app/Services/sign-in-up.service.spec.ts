import { TestBed } from '@angular/core/testing';

import { SignInUpService } from './sign-in-up.service';

describe('SignInUpService', () => {
  let service: SignInUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

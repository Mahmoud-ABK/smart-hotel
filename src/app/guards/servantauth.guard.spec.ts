import { TestBed } from '@angular/core/testing';

import { ServantauthGuard } from './servantauth.guard';

describe('ServantauthGuard', () => {
  let guard: ServantauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServantauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

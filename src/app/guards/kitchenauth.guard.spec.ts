import { TestBed } from '@angular/core/testing';

import { KitchenauthGuard } from './kitchenauth.guard';

describe('KitchenauthGuard', () => {
  let guard: KitchenauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KitchenauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

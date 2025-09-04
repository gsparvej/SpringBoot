import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authHRGuard } from './auth-hr-guard';

describe('authHRGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authHRGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

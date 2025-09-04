import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hRAdminGuard } from './hradmin-guard';

describe('hRAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hRAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

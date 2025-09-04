import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authMerchandiserGuard } from './auth-merchandiser-guard';

describe('authMerchandiserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authMerchandiserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

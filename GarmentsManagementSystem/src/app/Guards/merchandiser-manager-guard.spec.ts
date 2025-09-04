import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { merchandiserManagerGuard } from './merchandiser-manager-guard';

describe('merchandiserManagerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => merchandiserManagerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

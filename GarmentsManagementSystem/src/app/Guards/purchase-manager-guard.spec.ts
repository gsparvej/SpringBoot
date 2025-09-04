import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { purchaseManagerGuard } from './purchase-manager-guard';

describe('purchaseManagerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => purchaseManagerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { merchandiserJuniorGuard } from './merchandiser-junior-guard';

describe('merchandiserJuniorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => merchandiserJuniorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

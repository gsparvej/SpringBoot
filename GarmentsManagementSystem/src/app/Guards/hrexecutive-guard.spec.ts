import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hRExecutiveGuard } from './hrexecutive-guard';

describe('hRExecutiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hRExecutiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

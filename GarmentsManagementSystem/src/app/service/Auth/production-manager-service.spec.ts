import { TestBed } from '@angular/core/testing';

import { ProductionManagerService } from './production-manager-service';

describe('ProductionManagerService', () => {
  let service: ProductionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

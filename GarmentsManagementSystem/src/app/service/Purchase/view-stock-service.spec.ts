import { TestBed } from '@angular/core/testing';

import { ViewStockService } from './view-stock-service';

describe('ViewStockService', () => {
  let service: ViewStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

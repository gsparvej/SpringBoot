import { TestBed } from '@angular/core/testing';

import { CuttingPlanService } from './cutting-plan-service';

describe('CuttingPlanService', () => {
  let service: CuttingPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuttingPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

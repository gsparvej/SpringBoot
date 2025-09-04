import { TestBed } from '@angular/core/testing';

import { DayWiseProService } from './day-wise-pro-service';

describe('DayWiseProService', () => {
  let service: DayWiseProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayWiseProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

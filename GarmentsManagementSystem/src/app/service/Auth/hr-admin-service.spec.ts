import { TestBed } from '@angular/core/testing';

import { HrAdminService } from './hr-admin-service';

describe('HrAdminService', () => {
  let service: HrAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

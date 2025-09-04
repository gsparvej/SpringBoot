import { TestBed } from '@angular/core/testing';

import { CutBundleService } from './cut-bundle-service';

describe('CutBundleService', () => {
  let service: CutBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

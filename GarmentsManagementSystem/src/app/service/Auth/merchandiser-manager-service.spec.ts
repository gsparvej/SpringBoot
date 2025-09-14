import { TestBed } from '@angular/core/testing';

import { MerchandiserManagerService } from './merchandiser-manager-service';

describe('MerchandiserManagerService', () => {
  let service: MerchandiserManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchandiserManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

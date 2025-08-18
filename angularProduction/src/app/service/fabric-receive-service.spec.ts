import { TestBed } from '@angular/core/testing';

import { FabricReceiveService } from './fabric-receive-service';

describe('FabricReceiveService', () => {
  let service: FabricReceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabricReceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

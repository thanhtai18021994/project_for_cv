import { TestBed } from '@angular/core/testing';

import { PcAioServiceService } from './pc-aio-service.service';

describe('PcAioServiceService', () => {
  let service: PcAioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcAioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

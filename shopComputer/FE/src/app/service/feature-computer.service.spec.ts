import { TestBed } from '@angular/core/testing';

import { FeatureComputerService } from './feature-computer.service';

describe('FeatureComputerService', () => {
  let service: FeatureComputerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureComputerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

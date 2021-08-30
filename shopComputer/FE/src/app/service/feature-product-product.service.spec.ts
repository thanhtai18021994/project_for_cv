import { TestBed } from '@angular/core/testing';

import { FeatureProductProductService } from './feature-product-product.service';

describe('FeatureProductProductService', () => {
  let service: FeatureProductProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureProductProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

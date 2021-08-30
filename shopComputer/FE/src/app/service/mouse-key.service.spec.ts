import { TestBed } from '@angular/core/testing';

import { MouseKeyService } from './mouse-key.service';

describe('MouseKeyService', () => {
  let service: MouseKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouseKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

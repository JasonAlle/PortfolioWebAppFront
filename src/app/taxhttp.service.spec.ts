import { TestBed } from '@angular/core/testing';

import { TaxhttpService } from './taxhttp.service';

describe('TaxhttpService', () => {
  let service: TaxhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

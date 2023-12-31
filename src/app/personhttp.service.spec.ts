import { TestBed } from '@angular/core/testing';

import { PersonhttpService } from './personhttp.service';

describe('PersonhttpService', () => {
  let service: PersonhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

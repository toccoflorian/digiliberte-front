import { TestBed } from '@angular/core/testing';

import { RentService } from './rent.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RentService', () => {
  let service: RentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

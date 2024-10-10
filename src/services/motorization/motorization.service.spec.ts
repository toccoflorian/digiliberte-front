import { TestBed } from '@angular/core/testing';

import { MotorizationService } from './motorization.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MotorizationService', () => {
  let service: MotorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MotorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

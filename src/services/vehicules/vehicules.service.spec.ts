import { TestBed } from '@angular/core/testing';

import { VehiculesService } from './vehicules.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculesService', () => {
  let service: VehiculesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VehiculesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

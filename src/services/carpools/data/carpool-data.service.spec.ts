import { TestBed } from '@angular/core/testing';

import { CarpoolDataService } from './carpool-data.service';

describe('CarpoolDataService', () => {
  let service: CarpoolDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpoolDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

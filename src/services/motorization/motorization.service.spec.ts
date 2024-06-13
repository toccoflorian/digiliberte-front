import { TestBed } from '@angular/core/testing';

import { MotorizationService } from './motorisation.service';

describe('CreateMotorisationFormService', () => {
  let service: MotorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

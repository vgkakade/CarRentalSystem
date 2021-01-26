import { TestBed } from '@angular/core/testing';

import { GetCarsServiceService } from './get-cars-service.service';

describe('GetCarsServiceService', () => {
  let service: GetCarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

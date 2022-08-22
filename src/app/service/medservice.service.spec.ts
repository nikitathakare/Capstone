import { TestBed } from '@angular/core/testing';

import { MedserviceService } from 'src/app/service/medservice.service';

describe('MedserviceService', () => {
  let service: MedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

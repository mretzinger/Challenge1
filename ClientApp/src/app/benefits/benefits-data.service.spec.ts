import { TestBed } from '@angular/core/testing';

import { BenefitsDataService } from './benefits-data.service';

describe('BenefitsDataService', () => {
  let service: BenefitsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

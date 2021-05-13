import { TestBed } from '@angular/core/testing';

import { HoodService } from './hood.service';

describe('HoodService', () => {
  let service: HoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

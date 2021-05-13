import { TestBed } from '@angular/core/testing';

import { HoodInfoService } from './hood-info.service';

describe('HoodInfoService', () => {
  let service: HoodInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoodInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

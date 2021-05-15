import { TestBed } from '@angular/core/testing';

import { HcRefernceService } from './hc-refernce.service';

describe('HcRefernceService', () => {
  let service: HcRefernceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HcRefernceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

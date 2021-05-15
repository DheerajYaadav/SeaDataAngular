import { TestBed } from '@angular/core/testing';

import { McRefrenceServiceService } from './mc-refrence-service.service';

describe('McRefrenceServiceService', () => {
  let service: McRefrenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McRefrenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ItrnyService } from './itrny.service';

describe('ItrnyService', () => {
  let service: ItrnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItrnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

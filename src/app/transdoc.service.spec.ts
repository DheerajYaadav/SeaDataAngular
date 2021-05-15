import { TestBed } from '@angular/core/testing';

import { TransdocService } from './transdoc.service';

describe('TransdocService', () => {
  let service: TransdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

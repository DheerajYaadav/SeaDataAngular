import { TestBed } from '@angular/core/testing';

import { MctransdocmsrService } from './mctransdocmsr.service';

describe('MctransdocmsrService', () => {
  let service: MctransdocmsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MctransdocmsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

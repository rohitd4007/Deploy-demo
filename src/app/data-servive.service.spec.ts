import { TestBed } from '@angular/core/testing';

import { DataServiveService } from './data-servive.service';

describe('DataServiveService', () => {
  let service: DataServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GenereListService } from './genere-list.service';

describe('GenereListService', () => {
  let service: GenereListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenereListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

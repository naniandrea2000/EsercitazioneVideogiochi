import { TestBed } from '@angular/core/testing';

import { EditRouteGardsService } from './edit-route-gards.service';

describe('EditRouteGardsService', () => {
  let service: EditRouteGardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditRouteGardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MyRouteGardsService } from './my-route-gards.service';

describe('MyRouteGardsService', () => {
  let service: MyRouteGardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRouteGardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

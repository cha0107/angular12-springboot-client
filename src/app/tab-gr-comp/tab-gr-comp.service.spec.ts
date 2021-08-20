import { TestBed } from '@angular/core/testing';

import { TabGrCompService } from './tab-gr-comp.service';

describe('TabGrCompService', () => {
  let service: TabGrCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabGrCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

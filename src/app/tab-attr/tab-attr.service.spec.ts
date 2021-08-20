import { TestBed } from '@angular/core/testing';

import { TabAttrService } from './tab-attr.service';

describe('TabAttrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabAttrService = TestBed.get(TabAttrService);
    expect(service).toBeTruthy();
  });
});

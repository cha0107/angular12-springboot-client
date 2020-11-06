import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAttrListComponent } from './tabAttr-list.component';

describe('TabAttrListComponent', () => {
  let component: TabAttrListComponent;
  let fixture: ComponentFixture<TabAttrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAttrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAttrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

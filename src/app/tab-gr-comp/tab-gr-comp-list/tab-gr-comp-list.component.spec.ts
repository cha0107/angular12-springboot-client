import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGrCompListComponent } from './tab-gr-comp-list.component';

describe('TabGrCompListComponent', () => {
  let component: TabGrCompListComponent;
  let fixture: ComponentFixture<TabGrCompListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGrCompListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGrCompListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

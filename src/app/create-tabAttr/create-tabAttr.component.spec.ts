import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTabAttrComponent } from './create-tabAttr.component';

describe('CreateTabAttrComponent', () => {
  let component: CreateTabAttrComponent;
  let fixture: ComponentFixture<CreateTabAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTabAttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTabAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

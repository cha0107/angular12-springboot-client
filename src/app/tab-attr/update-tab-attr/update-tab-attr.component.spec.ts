import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTabAttrComponent } from './update-tab-attr.component';

describe('UpdateTabAttrComponent', () => {
  let component: UpdateTabAttrComponent;
  let fixture: ComponentFixture<UpdateTabAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTabAttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTabAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

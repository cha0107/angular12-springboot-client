import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTabGrCompComponent } from './update-tab-gr-comp.component';

describe('UpdateTabGrCompComponent', () => {
  let component: UpdateTabGrCompComponent;
  let fixture: ComponentFixture<UpdateTabGrCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTabGrCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTabGrCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

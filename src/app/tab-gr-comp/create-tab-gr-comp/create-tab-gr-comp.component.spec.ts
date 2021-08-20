import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTabGrCompComponent } from './create-tab-gr-comp.component';

describe('CreateTabGrCompComponent', () => {
  let component: CreateTabGrCompComponent;
  let fixture: ComponentFixture<CreateTabGrCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTabGrCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTabGrCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

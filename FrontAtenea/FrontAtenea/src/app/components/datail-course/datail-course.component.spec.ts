import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailCourseComponent } from './datail-course.component';

describe('DatailCourseComponent', () => {
  let component: DatailCourseComponent;
  let fixture: ComponentFixture<DatailCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

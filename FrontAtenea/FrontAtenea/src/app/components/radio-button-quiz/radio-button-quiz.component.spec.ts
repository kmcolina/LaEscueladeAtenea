import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonQuizComponent } from './radio-button-quiz.component';

describe('RadioButtonQuizComponent', () => {
  let component: RadioButtonQuizComponent;
  let fixture: ComponentFixture<RadioButtonQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

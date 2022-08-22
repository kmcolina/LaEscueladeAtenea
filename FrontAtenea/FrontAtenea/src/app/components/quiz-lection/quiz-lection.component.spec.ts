import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLectionComponent } from './quiz-lection.component';

describe('QuizLectionComponent', () => {
  let component: QuizLectionComponent;
  let fixture: ComponentFixture<QuizLectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizLectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

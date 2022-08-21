import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonQuizComponent } from '../components/radio-button-quiz/radio-button-quiz.component';
import { CheckBoxSkillComponent } from '../components/check-box-skill/check-box-skill.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [RadioButtonQuizComponent, CheckBoxSkillComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
})
export class QuizModule {}

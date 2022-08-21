import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonQuizComponent } from '../components/radio-button-quiz/radio-button-quiz.component';
import { CheckBoxSkillComponent } from '../components/check-box-skill/check-box-skill.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class QuizModule {}

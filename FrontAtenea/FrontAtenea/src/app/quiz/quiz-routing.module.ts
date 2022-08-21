import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBoxSkillComponent } from '../components/check-box-skill/check-box-skill.component';
import { RadioButtonQuizComponent } from '../components/radio-button-quiz/radio-button-quiz.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CheckBoxSkillComponent,
  },
  {
    path: 'test-skill',
    pathMatch: 'full',
    component: RadioButtonQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

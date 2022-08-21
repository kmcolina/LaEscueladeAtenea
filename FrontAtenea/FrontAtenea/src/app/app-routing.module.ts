import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBoxSkillComponent } from './components/check-box-skill/check-box-skill.component';
import { RadioButtonQuizComponent } from './components/radio-button-quiz/radio-button-quiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'endRegister', component: QuizComponent },

  {
    path: 'skills',
    component: CheckBoxSkillComponent,
  },
  {
    path: 'skills/test-skill',
    component: RadioButtonQuizComponent,
  },
  {
    path: 'endRegister',
    component: QuizComponent,
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

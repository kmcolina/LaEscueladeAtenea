import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBoxSkillComponent } from './components/check-box-skill/check-box-skill.component';
import { DatailCourseComponent } from './components/datail-course/datail-course.component';
import { IntroComponent } from './components/intro/intro.component';
import { PanelLectionComponent } from './components/panel-lection/panel-lection.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RadioButtonQuizComponent } from './components/radio-button-quiz/radio-button-quiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'endRegister', component: QuizComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'detailCourse', component: DatailCourseComponent },
  { path: 'lection', component: PanelLectionComponent },

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

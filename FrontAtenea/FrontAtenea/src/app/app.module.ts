import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuizComponent } from './quiz/quiz.component';
import { CheckBoxSkillComponent } from './components/check-box-skill/check-box-skill.component';
import { RadioButtonQuizComponent } from './components/radio-button-quiz/radio-button-quiz.component';
import { MatRadioModule } from '@angular/material/radio';
import { PrincipalComponent } from './components/principal/principal.component';
import { IntroComponent } from './components/intro/intro.component';
import { DatailCourseComponent } from './components/datail-course/datail-course.component';
import { PanelLectionComponent } from './components/panel-lection/panel-lection.component';
import { QuizLectionComponent } from './components/quiz-lection/quiz-lection.component';
import { FinishQuizComponent } from './components/finish-quiz/finish-quiz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginCardComponent,
    FooterComponent,
    RegisterCardComponent,
    QuizComponent,
    CheckBoxSkillComponent,
    RadioButtonQuizComponent,
    PrincipalComponent,
    IntroComponent,
    DatailCourseComponent,
    PanelLectionComponent,
    QuizLectionComponent,
    FinishQuizComponent,
    DatailCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-radio-button-quiz',
  templateUrl: './radio-button-quiz.component.html',
  styleUrls: ['./radio-button-quiz.component.scss'],
})
export class RadioButtonQuizComponent implements OnInit {
  form: FormGroup;

  valor1!: number;
  valor2!: number;
  resultado!: number;

  operacionSeleccionada: string = 'suma';

  favoriteSeason!: string;
  seasons: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.',
    'Spring',
    'Summer',
    'Autumn',
  ];
  skillsAvaible = [
    {
      title: 'Lenguaje Python',
      name: 'python',
      img: '/assets/python.svg',
    },
    {
      title: 'HTML',
      name: 'html',
      img: '/assets/html.png',
    },
    {
      title: 'CSS',
      name: 'css',
      img: '/assets/css.png',
    },
    {
      title: 'Lenguaje java',
      name: 'java',
      img: '/assets/java.svg',
    },
    {
      title: 'CSS',
      name: 'css',
      img: '/assets/css.png',
    },
    {
      title: 'Lenguaje java',
      name: 'java',
      img: '/assets/java.svg',
    },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      selectedSkills: new FormArray([]),
    });
  }
  submit() {
    console.log(this.form.value);
    this.router.navigate(['skills/test-skill']);
  }

  ngOnInit(): void {
    console.log('init del check');
  }

  goNext() {
    console.log('operar ', this.favoriteSeason);
  }
}

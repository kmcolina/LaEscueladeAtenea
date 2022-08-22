import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel-lection',
  templateUrl: './panel-lection.component.html',
  styleUrls: ['./panel-lection.component.scss'],
})
export class PanelLectionComponent implements OnInit {
  form: FormGroup;

  valor1!: number;
  valor2!: number;
  resultado!: number;

  anwserQuestion!: string;
  seasons: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.',
    'Spring',
    'Summer',
    'Autumn',
  ];

  skillsCompletes = [
    {
      title: 'Programación Python Basica',
      name: 'python',
      img: '/assets/python.svg',
    },
  ];
  seasones = [
    {
      q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue suscipit ornare. Duis posuere interdum vulputate. Aenean auctor orci ac accumsan blandit. Nullam lectus neque, auctor quis tortor vel, lobortis rhoncus libero. Maecenas sed vehicula dolor, at tristique nisl. Sed pulvinar est porttitor diam facilisis posuere. Nulla commodo, felis sit amet mollis bibendum, leo odio sollicitudin lacus, in tristique metus justo at',
      r: ['winter', 'Spring', 'Summer', 'Autumn'],
    },
    {
      q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue suscipit ornare. Duis posuere interdum vulputate. Aenean auctor orci ac accumsan blandit. Nullam lectus neque, auctor quis tortor vel, lobortis rhoncus libero. Maecenas sed vehicula dolor, at tristique nisl. Sed pulvinar est porttitor diam facilisis posuere. Nulla commodo, felis sit amet mollis bibendum, leo odio sollicitudin lacus, in tristique metus justo at',
      r: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.',
        'Spring',
        'Summer',
        'Autumn',
      ],
    },
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
    console.log('respuesta ', this.anwserQuestion);

    this.router.navigate(['endRegister']);
  }
}

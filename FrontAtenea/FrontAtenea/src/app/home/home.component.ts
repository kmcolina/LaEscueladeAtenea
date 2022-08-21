import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navBarText = ['En Curso', 'Completo', 'Incompleto', 'Explorar'];
  active!: number;
  form!: FormGroup;

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
  ];

  skillsCompletes = [
    {
      title: 'Programación Python Basica',
      name: 'python',
      img: '/assets/python.svg',
    },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      selectedSkills: new FormArray([]),
    });
  }

  ngOnInit(): void {}

  activeItem(item: any) {
    console.log('item', item);
    this.active = item;

    switch (item) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        console.log('invalid option');
        break;
    }
  }

  onCheckboxChange(event: any) {
    console.log('change');
    const selectedSkills = this.form.controls['selectedSkills'] as FormArray;
    if (event.target.checked) {
      selectedSkills.push(new FormControl(event.target.value));
    } else {
      const index = selectedSkills.controls.findIndex(
        (x) => x.value === event.target.value
      );
      selectedSkills.removeAt(index);
    }
  }

  submit(car: any) {
    console.log('car on subnit', car.name);
    //enviar al curso correcpondiente con car.name
    this.router.navigate(['skills/test-skill']);
  }
}

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

  userName!: string;
  location!: string;

  courseSelect: string = '';

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

  rakingProfiles = [
    {
      avatar: '/assets/avatar1.svg',
      name: 'Jose Gonzalez',
      location: 'Caracas, Venezuela',
      rval: 995,
    },
    {
      avatar: '/assets/avatar2.svg',
      name: 'Karelys Hurtado',
      location: 'Caracas, Venezuela',
      rval: 954,
    },
    {
      avatar: '/assets/avatar3.svg',
      name: 'Andres Garrido',
      location: 'Miranda, Venezuela',
      rval: 741,
    },
    {
      avatar: '/assets/avatar4.svg',
      name: 'Pedro Martinez',
      location: 'Caracas, Venezuela',
      rval: 584,
    },
    {
      avatar: '/assets/avatar5.svg',
      name: 'Luis Alfaro',
      location: 'Caracas, Venezuela',
      rval: 254,
    },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      selectedSkills: new FormArray([]),
    });

    this.userName = 'Yker Mendoza';
    this.location = 'Caracas, Venezuela';
    this.active = 3;
  }

  ngOnInit(): void {}

  activeItem(item: any) {
    console.log('item', item);
    this.active = item;
    this.courseSelect = '';
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

    this.courseSelect = car.name;
    //enviar al curso correcpondiente con car.name
    //this.router.navigate(['skills/test-skill']);
  }

  close() {
    this.router.navigate(['']);
  }
}

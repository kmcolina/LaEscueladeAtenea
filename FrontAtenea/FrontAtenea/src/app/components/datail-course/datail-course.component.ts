import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-datail-course',
  templateUrl: './datail-course.component.html',
  styleUrls: ['./datail-course.component.scss'],
})
export class DatailCourseComponent implements OnInit {
  //necesita unos input
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToModuleDetail() {
    this.router.navigate(['lection']);
  }
}

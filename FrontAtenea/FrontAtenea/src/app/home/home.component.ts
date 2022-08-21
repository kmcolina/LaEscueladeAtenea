import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navBarText = ['En Curso', 'Completo', 'Incompleto', 'Explorar'];
  active!: number;

  constructor() {}

  ngOnInit(): void {}

  activeItem(item: any) {
    console.log('item', item);
    this.active = item;
  }
}

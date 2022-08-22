import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  atenea = '/assets/MochueloHome.svg';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  'footer': {
    login: 'El acceso o uso no autorizado se considera un delito. Derechos protegidos por Mercantil C.A., Banco Universal. RIF: J-00002961-0.';
    default: 'La información mostrada en esta página es confidencial.';
  };

  copyright: string = '';
  constructor() {}

  ngOnInit(): void {
    this.copyright = this.footer.login;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountDTO } from 'src/app/models/accountDto';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss'],
})
export class RegisterCardComponent implements OnInit {
  username: string = '';
  password: string = '';
  show: boolean = false;

  ngOnInit(): void {}

  hidePassword = true;
  loginData: AccountDTO = { Usuario: '', Password: '' };
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pwdFormControl = new FormControl('', [Validators.required]);
  usrFormControl = new FormControl('', [Validators.required]);
  constructor(private router: Router) {}

  loginUser() {
    if (
      !this.usrFormControl.valid ||
      !this.pwdFormControl.valid ||
      !this.emailFormControl.valid
    )
      return;

    this.router.navigate(['skills']);
  }

  submit() {
    console.log('user name is ' + this.username);
    this.clear();
  }
  clear() {
    this.username = '';
    this.password = '';
    this.show = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountDTO } from 'src/app/models/accountDto';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  username: string = '';
  password: string = '';
  show: boolean = false;

  ngOnInit(): void {}

  hidePassword = true;
  loginData: AccountDTO = { Email: '', Password: '' };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pwdFormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router) {}

  loginUser() {
    if (!this.emailFormControl.valid || !this.pwdFormControl.valid) return;

    this.router.navigate(['home']);
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

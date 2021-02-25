import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { UserCredentials } from 'src/app/_models/user-credentials.type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm: FormGroup = new FormGroup({
    // TODO: add validators and TEST them
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public loginService: LoginService){ }

  onSubmit() {
    this.loginService.login(this.loginForm.value as UserCredentials);
    this.loginForm.reset();
  }

  onLogout() {
    this.loginService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { UserCredentials } from 'src/app/_models/user-credentials.type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLogged$: Observable<boolean>;

  loginForm: FormGroup = new FormGroup({
    // TODO: add validators
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService){ }

  ngOnInit(): void {
    this.isLogged$ = this.loginService.isLogged$;
  }

  onSubmit() {
    const credentials: UserCredentials = this.loginForm.value;
    this.loginService.login(credentials);
    this.loginForm.reset();
  }

  onLogout() {
    this.loginService.logout();
  }

}

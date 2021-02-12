import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { appRoutesName } from 'src/app/app-routing.module';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged$: BehaviorSubject<boolean>;
  username: string = null;
  buttonText: string = 'LOGIN'
  user$: BehaviorSubject<string>

  constructor(private loginService: LoginService) { } // private router: Router

  ngOnInit(): void {
    this.user$ = this.loginService.user$;
    this.isLogged$ = this.loginService.isLogged$;
  }

  // TODO: it would be nice to only have one button in the header
  // onClick() {
  //   if (this.isLoggedIn) {
  //     this.buttonText = 'LOGOUT';
  //   } else {
  //     const currentUrl = this.router.url.substr(1);
  //     this.buttonText = (appRoutesName.ACTIVITIES === currentUrl) ? 'ACTIVITIES' : 'LOGIN';
  //     const targetUrl = (appRoutesName.ACTIVITIES === currentUrl) ? appRoutesName.LOGIN : appRoutesName.ACTIVITIES;
  //     this.router.navigate([targetUrl]);
  //   }
  // }

}

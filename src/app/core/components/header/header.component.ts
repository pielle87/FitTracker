import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutesName } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user = { name: 'pielle' };
  buttonText = 'LOGIN'

  constructor() { } // private router: Router

  ngOnInit(): void {
  }

  // TODO
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

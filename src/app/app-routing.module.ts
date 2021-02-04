import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesPageComponent } from './features/activities-page/activities-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';

const routes: Routes = [
  { path: 'activities', component: ActivitiesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'activities' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

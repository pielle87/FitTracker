import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesPageComponent } from './features/activities-page/activities-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';

export const appRoutesName = {
  ACTIVITIES: 'activities',
  LOGIN: 'login',
}

const routes: Routes = [
  { path: appRoutesName.ACTIVITIES, component: ActivitiesPageComponent },
  { path: appRoutesName.LOGIN, component: LoginPageComponent },
  { path: '**', redirectTo: appRoutesName.ACTIVITIES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

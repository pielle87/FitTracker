import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesPageComponent } from './features/activities-page/activities-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ActivitiesFormsComponent } from './features/activities-page/activities-forms/activities-forms.component';
import { ActivitiesStatsComponent } from './features/activities-page/activities-stats/activities-stats.component';
import { ActivitiesListComponent } from './features/activities-page/activities-list/activities-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesPageComponent,
    LoginPageComponent,
    HeaderComponent,
    ActivitiesFormsComponent,
    ActivitiesStatsComponent,
    ActivitiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

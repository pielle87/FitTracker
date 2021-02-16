import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { LoginService } from 'src/app/core/services/login.service';
import { Activity } from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css'],
})
export class ActivitiesPageComponent implements OnInit {
  isLogged: boolean = false;
  activities: Activity[];

  constructor(
    private loginService: LoginService,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit(): void {
    this.activities = this.activitiesService.getActivities();
    this.loginService.isLogged$.subscribe(value => this.isLogged = value);
  }

  onNewActivity(event: Omit<Activity, 'id'>) {
    this.activities = this.activitiesService.addActivity(event);
  }

  onDeleteActivity(id: number) {
    console.log('ActivitiesPageComponent: ', 'delete ', id);

    this.activities = this.activitiesService.deleteActivity(id);
  }
}



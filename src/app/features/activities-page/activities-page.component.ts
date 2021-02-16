import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { LoginService } from 'src/app/core/services/login.service';
import { Activity } from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css'],
})
export class ActivitiesPageComponent implements OnInit {
  activities: Activity[];

  constructor(
    public loginService: LoginService,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit(): void {
    this.activities = this.activitiesService.getActivities();
  }

  onNewActivity(event: Omit<Activity, 'id'>) {
    this.activities = this.activitiesService.addActivity(event);
  }

  onDeleteActivity(id: number) {
    console.log('ActivitiesPageComponent: ', 'delete ', id);

    this.activities = this.activitiesService.deleteActivity(id);
  }
}



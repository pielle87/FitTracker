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
  selectedActivity: Activity;

  constructor(
    public loginService: LoginService,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit(): void {
    this.activities = this.activitiesService.getActivities();
  }

  onReceivedActivity(event: Omit<Activity, 'id'>): void {
    this.activities = this.selectedActivity ?
      this.activitiesService.editActivity({ id: this.selectedActivity.id, ...event}) :
      this.activitiesService.addActivity(event);
  }

  onDeleteActivity(id: number): void {
    if (confirm("Delete: are you sure?")) {
      console.log('ActivitiesPageComponent: ', 'delete ', id);
      this.activities = this.activitiesService.deleteActivity(id);
      if (this.selectedActivity.id === id) {
    // TODO: here I should make sure that the form is reset (otherwise: click to edit, then delete: id still exists?)
      }
    }
  }

  onEditActivity(activity: Activity): void {
    this.selectedActivity = activity;
  }
}



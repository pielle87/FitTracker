import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from 'src/app/core/services/activities.service';
import {LoginService} from 'src/app/core/services/login.service';
import {Activity} from 'src/app/_models/activity';

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
  ) {
  }

  ngOnInit(): void {
    this.activities = this.activitiesService.getActivities();
  }

  onReceivedActivity(event: Activity): void {
    // TODO: test all cases
    // TODO: refactor to remove refences to selectedActivity and activities (also refactor service?)
    this.activities = this.selectedActivity ?
      this.activitiesService.editActivity({...this.selectedActivity, ...event}) :
      this.activitiesService.addActivity(event);

    if (this.selectedActivity) {
      this.selectedActivity = null;
    }
  }

  onDeleteActivity(id: number): void {
    if (confirm('Delete: are you sure?')) {
      console.log('ActivitiesPageComponent: ', 'delete ', id);
      this.activities = this.activitiesService.deleteActivity(id);
    }
  }

  onEditActivity(activity: Activity): void {
    this.selectedActivity = activity;
  }
}



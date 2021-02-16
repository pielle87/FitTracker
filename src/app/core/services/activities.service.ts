import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from 'src/app/_models/activity';
import { ACTIVITIES } from 'src/assets/mock-activities';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  activities: Activity[]; // TODO: OBSERVABLE???

  constructor() {}

  getActivities(): Activity[] {
    // get from Server an OBSERVABLE
    of(ACTIVITIES).subscribe((act) => (this.activities = act));

    return this.activities;
  }

  addActivity(activity: Omit<Activity, 'id'>): Activity[] {
    console.log('ActivitiesService: ', activity);

    this.activities.push({ id: Math.random(), ...activity });
    // TODO: server side addition
    return this.activities;
  }

  deleteActivity(id: number) {
    console.log('ActivitiesService: ', 'delete');
    // TODO: server side deletion
    return (this.activities = this.activities.filter(
      (activity) => activity.id !== id
    ));
  }
}

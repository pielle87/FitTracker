import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Activity} from 'src/app/_models/activity.type';
import {ACTIVITIES} from 'src/assets/mock-activities';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  activities: Activity[]; // TODO: OBSERVABLE???

  constructor() {
  }

  getActivities(): Activity[] {
    // preparaton: get Observable from Server
    of(ACTIVITIES).subscribe((act) => (this.activities = act));
    return this.activities;
  }

  addActivity(activity: Activity): Activity[] {
    console.log('ActivitiesService: ', 'add id: ', activity.id);

    this.activities.push({id: Math.random(), ...activity});
    // TODO: server side addition
    return this.activities;
  }

  editActivity(activity: Activity): Activity[] {
    const index = this.activities.findIndex(act => act.id === activity.id);
    this.activities[index] = activity;
    console.log('ActivitiesService: ', 'edit id: ', activity.id);
    return this.activities;
  }

  deleteActivity(id: number): Activity[] {
    console.log('ActivitiesService: ', 'delete id: ', id);
    // TODO: server side deletion
    return (this.activities = this.activities.filter(
      (activity) => activity.id !== id
    ));
  }
}

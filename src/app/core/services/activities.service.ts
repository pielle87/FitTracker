import { Injectable } from '@angular/core';
import { Activity } from 'src/app/_models/activity';
import { ACTIVITIES } from 'src/assets/mock-activities';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

  getActivities(): Activity[] {
    return ACTIVITIES;
  }
}

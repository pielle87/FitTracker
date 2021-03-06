import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Activity } from 'src/app/_models/activity.type';

@Component({
  selector: 'app-activities-stats',
  templateUrl: './activities-stats.component.html',
  styleUrls: ['./activities-stats.component.css']
})
export class ActivitiesStatsComponent implements OnChanges {
  @Input() activities: Activity[];
  totalDuration: number
  avgDuration: number

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const activitiesInput: Activity[] = changes.activities.currentValue;
    console.log('ActivitiesStatsComponent: ', activitiesInput);

    this.totalDuration = activitiesInput.reduce((total: number, activity: Activity) => total += activity.duration, 0);
    this.avgDuration = this.totalDuration / activitiesInput.length;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-stats',
  templateUrl: './activities-stats.component.html',
  styleUrls: ['./activities-stats.component.css']
})
export class ActivitiesStatsComponent implements OnInit {
  @Input() activities: Activity[];
  totalDuration: number
  avgDuration: number

  constructor() { }

  ngOnInit(): void {
    this.totalDuration = this.activities.reduce((total, activity) => total += activity.duration, 0);
    this.avgDuration = this.totalDuration / this.activities.length;
  }

}

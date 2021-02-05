import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { Activity } from 'src/app/_models/activity';



@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})
export class ActivitiesPageComponent implements OnInit {
  activities: Activity[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.activities = this.activitiesService.getActivities();
  }

}



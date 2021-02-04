import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from 'src/assets/mock-activities';
import { Activity } from './_models/activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activities: Activity[];

  ngOnInit() {
    this.activities = ACTIVITIES;
  }
}

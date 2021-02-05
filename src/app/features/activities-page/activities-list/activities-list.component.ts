import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  @Input() activities: Activity[];

  constructor() { }

  ngOnInit(): void {
  }

}

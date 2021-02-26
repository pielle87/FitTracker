import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  @Input() activities: Activity[];
  @Input() isLogged: boolean;
  @Output() idToDelete = new EventEmitter<number>()
  @Output() activityToEdit = new EventEmitter<Activity>()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(activity: Activity) {
    this.idToDelete.emit(activity.id)
  }

  onEdit(activity: Activity) {
    this.activityToEdit.emit(activity);
  }

}

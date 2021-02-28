import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Activity, FeelingColors} from 'src/app/_models/activity.type';

@Component({
  selector: 'app-activities-forms',
  templateUrl: './activities-forms.component.html',
  styleUrls: ['./activities-forms.component.css']
})
export class ActivitiesFormsComponent implements OnChanges {
  @Input() active: Activity;
  @Output() emitActivity: EventEmitter<Activity> = new EventEmitter<Activity>();
  @Output() resetForm: EventEmitter<any> = new EventEmitter<any>();
  feelingColors = FeelingColors;

  activityForm: FormGroup = this.fb.group({
    date: [null],
    type: [null, Validators.required],
    duration: [null, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
    notes: [null],
    feelingColor: [null],
    feeling: [null],
    link: [null],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const activityToEdit: Activity = changes.active.currentValue;

    if (activityToEdit) {
      const { date, type, duration, notes, feelingColor, feeling, link } = activityToEdit;
      this.activityForm.setValue({ date, type, duration, notes, feelingColor, feeling, link });
    }
  }

  onSubmit(activity: Activity): void {
    this.activityForm.reset();
    this.emitActivity.emit(activity);
  }

  onReset(): void {
    this.resetForm.emit();
  }
}


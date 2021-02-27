import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Activity, FeelingColors} from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-forms',
  templateUrl: './activities-forms.component.html',
  styleUrls: ['./activities-forms.component.css']
})
export class ActivitiesFormsComponent implements OnChanges {
  @Input() active: Activity;
  @Output() emitActivity = new EventEmitter<Activity>();
  //TODO: @Output reset --> use it on a 'X' as well as to reset the selected in parent after submitting (modify code also in submit function)
  feelingColors = FeelingColors;

  activityForm: FormGroup = this.fb.group({
    date: [''],
    type: ['', Validators.required],
    duration: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
    notes: [''],
    feelingColor: [''],
    feeling: [''],
    link: [''],
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

  onSubmit(item: Activity): void {
    this.emitActivity.emit(item);
    this.activityForm.reset();
  }
}

// TODO: delete this
// @Input activityToEdit
// load the activity in the formb (ngOnChanges)

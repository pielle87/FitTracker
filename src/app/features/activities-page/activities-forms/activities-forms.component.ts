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
  @Output() emitActivity: EventEmitter<Omit<Activity, 'id'>> = new EventEmitter<Omit<Activity, 'id'>>();
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

  onSubmit(): void {
    // TODO: maybe there is a simpler way to do this with destructuring
    const date: Date = new Date(this.activityForm.get('date').value);
    const type: string = this.activityForm.get('type').value
    const duration: number = parseInt(this.activityForm.get('duration').value);
    const notes: string = this.activityForm.get('notes').value
    const feelingColor: FeelingColors = this.activityForm.get('feelingColor').value
    const feeling: string = this.activityForm.get('feeling').value
    const link: URL = this.activityForm.get('link').value ? new URL(this.activityForm.get('link').value) : null;

    this.activityForm.reset();
    this.emitActivity.emit({ date, type, duration, notes, feelingColor, feeling, link });
  }

  onReset(): void {
    this.resetForm.emit();
  }
}


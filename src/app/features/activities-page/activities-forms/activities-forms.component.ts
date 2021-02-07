import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeelingColors } from 'src/app/_models/activity';

@Component({
  selector: 'app-activities-forms',
  templateUrl: './activities-forms.component.html',
  styleUrls: ['./activities-forms.component.css']
})
export class ActivitiesFormsComponent implements OnInit {
  feelingColors = FeelingColors;

  activityForm: FormGroup = this.fb.group({
    date: [''],
    type: ['', Validators.required],
    duration: [''],
    notes: [''],
    feelingColor: [''],
    feeling: [''],
    link: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}

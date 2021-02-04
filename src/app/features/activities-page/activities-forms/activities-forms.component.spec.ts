import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesFormsComponent } from './activities-forms.component';

describe('ActivitiesFormsComponent', () => {
  let component: ActivitiesFormsComponent;
  let fixture: ComponentFixture<ActivitiesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

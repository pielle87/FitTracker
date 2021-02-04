import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesStatsComponent } from './activities-stats.component';

describe('ActivitiesStatsComponent', () => {
  let component: ActivitiesStatsComponent;
  let fixture: ComponentFixture<ActivitiesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

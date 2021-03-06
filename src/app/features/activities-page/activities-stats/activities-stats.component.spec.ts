import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Activity } from 'src/app/_models/activity.type';

import { ActivitiesStatsComponent } from './activities-stats.component';

describe('ActivitiesStatsComponent', () => {
  let componentUnderTest: ActivitiesStatsComponent;
  let actualResult: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesStatsComponent]
    });
    componentUnderTest = TestBed.inject(ActivitiesStatsComponent);
    actualResult = undefined;
  });

  describe('METHOD: ngOnChanges', () => {
    let simpleChanges: SimpleChanges;
    let expectedTotalDuration: number;
    let expectedAvgDuration: number;
    When(() => {
       componentUnderTest.ngOnChanges(simpleChanges)
    });

    describe('GIVEN activities Input changes', () => {
      Given(() => {
        simpleChanges = { activities: new SimpleChange(undefined, createFakeActivities(), false) };
        expectedTotalDuration = 140;
        expectedAvgDuration = 70;
      });
      Then('Total duration is computed',() => {
        expect(componentUnderTest.totalDuration).toEqual(expectedTotalDuration);
      });
      Then('Average duration is computed',() => {
        expect(componentUnderTest.avgDuration).toEqual(expectedAvgDuration);
      });
    });
  });
});

// PRE-BUILT TESTS
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
    component.activities = createFakeActivities();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function createFakeActivities(): Activity[] {
  return [
    {
      id: 1,
      date: new Date(2021, 2, 1),
      type: 'stretching',
      duration: 90,
    },
    {
      id: 2,
      date: new Date(2021, 2, 2),
      type: 'running',
      duration: 50,
    },
  ];
}

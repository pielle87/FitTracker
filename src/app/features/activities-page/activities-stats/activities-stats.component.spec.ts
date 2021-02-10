import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Activity } from 'src/app/_models/activity';

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

  describe('METHOD: ngOnInit', () => {
    let expectedResult: number;

    When(() => {
      componentUnderTest.ngOnInit();
    });

    describe('GIVEN activities THEN total duration is correct', () => {
      Given(() => {
        componentUnderTest.activities = createFakeActivities();
        expectedResult = 140;
      });
      Then('total duration', () => {
        actualResult = componentUnderTest.totalDuration;
        expect(actualResult).toEqual(expectedResult);
      });
    });

    describe('GIVEN activities THEN average duration is correct', () => {
      Given(() => {
        componentUnderTest.activities = createFakeActivities();
        expectedResult = 70;
      });
      Then('average duration', () => {
        actualResult = componentUnderTest.avgDuration;
        expect(actualResult).toEqual(expectedResult);
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

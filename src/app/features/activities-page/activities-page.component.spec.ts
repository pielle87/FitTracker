import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { provideAutoSpy, Spy } from 'jasmine-auto-spies';
import { Component, Input } from '@angular/core';

import { ActivitiesPageComponent } from './activities-page.component';
import { Activity } from 'src/app/_models/activity';
import { AppModule } from 'src/app/app.module';

describe('ActivitiesPageComponent', () => {
  let componentUnderTest: ActivitiesPageComponent;
  let activitiesServiceSpy: Spy<ActivitiesService>;
  let actualResult: number;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesPageComponent, provideAutoSpy(ActivitiesService)],
    });

    componentUnderTest = TestBed.inject(ActivitiesPageComponent);
    activitiesServiceSpy = TestBed.inject<any>(ActivitiesService);
    actualResult = undefined;
  });

  describe('METHOD: ngOnInit', () => {
    When(() => {
      componentUnderTest.ngOnInit();
    });

    describe('GIVEN initalization THEN populate array', () => {
      Given(() => {
        const fakeData = [
          {
            date: new Date(2021, 2, 1),
            type: 'stretching',
            duration: 90,
          },
        ];
        activitiesServiceSpy.getActivities.and.returnValue(fakeData);
        actualResult = 1;
      });
      Then('populate array', () => {
        // populate array
        expect(actualResult).toEqual(componentUnderTest.activities.length);
      });
    });
  });
});

// PRE-BUILT TESTS
describe('(old)ActivitiesPageComponent', () => {
  let componentUnderTest: ActivitiesPageComponent;
  let fixture: ComponentFixture<ActivitiesPageComponent>;
  beforeEach(async () => {
    @Component({ selector: 'app-activities-forms', template: '' })
    class FakeActivitiesFormsComponent {
      @Input() activities: Activity[];
    }
    @Component({ selector: 'app-activities-list', template: '' })
    class FakeActivitiesListComponent {
      @Input() activities: Activity[];
    }
    @Component({ selector: 'app-activities-stats', template: '' })
    class FakeActivitiesStatsComponent {
      @Input() activities: Activity[];
    }
    await TestBed.configureTestingModule({
      declarations: [
        ActivitiesPageComponent,
        FakeActivitiesFormsComponent,
        FakeActivitiesListComponent,
        FakeActivitiesStatsComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPageComponent);
    componentUnderTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentUnderTest).toBeTruthy();
  });
});

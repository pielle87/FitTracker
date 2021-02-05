import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { provideAutoSpy, Spy } from 'jasmine-auto-spies';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ActivitiesPageComponent } from './activities-page.component';

describe('ActivitiesPageComponent', () => {
  let componentUnderTest: ActivitiesPageComponent;
  let activitiesServiceSpy: Spy<ActivitiesService>;
  let actualResult: number;
  
  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivitiesPageComponent,
        provideAutoSpy(ActivitiesService),
      ]
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
        const fakeData = [{
          date: new Date(2021, 2, 1),
          type: 'stretching',
          duration: 90
        }]
        activitiesServiceSpy.getActivities.and.returnValue(fakeData);
        actualResult = 1
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
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
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
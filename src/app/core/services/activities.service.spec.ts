import { TestBed } from '@angular/core/testing';
import { Activity } from 'src/app/_models/activity.type';
import { ACTIVITIES } from 'src/assets/mock-activities';
import { ActivitiesService } from './activities.service';



describe('ActivitiesService', () => {
  let serviceUnderTest: ActivitiesService;
  let actualResult: Activity[];
  let expectedResult: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [ ActivitiesService ],
    });

    serviceUnderTest = TestBed.inject(ActivitiesService);
    actualResult = undefined;
  });

  describe('METHOD: getActivities', () => {
    When(() => {
      actualResult = serviceUnderTest.getActivities();
    });
    describe('GIVEN activities are queried', () => {
      Given(() => {
        // no config in this case. Integration test with real list at the moment
      });
      Then('Instantiate list of activities',() => {
        expect(actualResult).toEqual(ACTIVITIES);
      });
    });
  });

  describe('METHOD: addActivity', () => {
    let fakeActivity: Activity;
    When(() => {
      actualResult = serviceUnderTest.addActivity(fakeActivity);
    });
    describe('GIVEN new activity', () => {
      Given(() => {
        fakeActivity = createFakeActivityToAdd();
        // pass a new array in order not to "pass by reference"
        serviceUnderTest.activities = createFakeActivities();
      });
      Then('Activity is added',() => {
        let randomizedId = serviceUnderTest.activities[serviceUnderTest.activities.length-1].id
        let addedActivity: Activity = { id: randomizedId, ...fakeActivity };
        expectedResult = [...createFakeActivities(), addedActivity];
        expect(actualResult).toEqual(expectedResult);
      });
      Then('Length is increased', () => {
        expect(actualResult.length).toEqual(createFakeActivities().length + 1);
      });
    });
  });

  describe('METHOD: editActivity', () => {
    let fakeActivity;
    When(() => {
      actualResult = serviceUnderTest.editActivity(fakeActivity);
    });

    describe('GIVEN an Activity to edit', () => {

      Given(() => {
        fakeActivity = createFakeActivityToEdit();
        serviceUnderTest.activities = createFakeActivities();
      });
      Then('Activity is edited',() => {
        expectedResult = createFakeActivities();
        const index = expectedResult.findIndex(act => act.id === fakeActivity.id);
        expectedResult[index] = fakeActivity;
        expect(actualResult).toEqual(expectedResult);
      });
      Then('Length is unchanged', () => {
        expect(actualResult.length).toEqual(createFakeActivities().length);
      });
    });
  });

  describe('METHOD: deleteActivity', () => {
    let idToDelete: number;
    When(() => {
      actualResult = serviceUnderTest.deleteActivity(idToDelete);
    });
    describe('GIVEN id to delete', () => {

      Given(() => {
        idToDelete = createIdToDelete();
        serviceUnderTest.activities = createFakeActivities();
      });
      Then('Activity is deleted',() => {
        expectedResult = createFakeActivities().filter(
          (activity) => activity.id !== idToDelete
        )
        expect(actualResult).toEqual(expectedResult);
      });
      Then('Length is reduced', () => {
        expect(actualResult.length).toEqual(createFakeActivities().length - 1);
      });
    });
  });
});

// PRE-BUILT TESTS
describe('(old)ActivitiesService', () => {
  let service: ActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

function createFakeActivityToAdd(): Activity {
  return {
    id: 4,
    date: new Date(2021, 2, 4),
    type: 'abs',
    duration: 23,
  };
}

function createFakeActivityToEdit(): Activity {
  return {
    id: 1,
    date: new Date(2021, 2, 5),
    type: 'swimming',
    duration: 30,
  };
}

function createIdToDelete(): number {
  return 2;
}

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
      duration: 35,
    },
    {
      id: 3,
      date: new Date(2021, 2, 3),
      type: 'climbing',
      duration: 35,
    },
  ];
}

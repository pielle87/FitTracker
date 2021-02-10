import { TestBed } from '@angular/core/testing';
import { Activity } from 'src/app/_models/activity';
import { ActivitiesService } from './activities.service';



describe('ActivitiesService', () => {
  let serviceUnderTest: ActivitiesService;
  let actualResult: Activity[];
  let expectedResult: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesService]
    });

    serviceUnderTest = TestBed.inject(ActivitiesService);
    actualResult = undefined;
  });

  describe('METHOD: getActivities', () => {

    When(() => {
      // TODO: this should be configured to return a fake list and not the real one
      actualResult = serviceUnderTest.getActivities();
    });

    describe('GIVEN activities are queried THEN list is instantiated', () => {
      Given(() => {
        // activities are queried THEN list is instantiated
        expectedResult = 4;
      });
      Then('instantiate list of activities',() => {
        // instantiate list of activities
        expect(actualResult.length).toEqual(expectedResult);
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

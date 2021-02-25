import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListComponent } from './activities-list.component';

import { ObserverSpy, subscribeSpyTo } from '@hirez_io/observer-spy';
import { Activity, FeelingColors } from 'src/app/_models/activity';

describe('ActivitiesListComponent', () => {
  let componentUnderTest: ActivitiesListComponent;
  let idToDeleteSpy: ObserverSpy<any>;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesListComponent]
    });

    componentUnderTest = TestBed.inject(ActivitiesListComponent);

  });

  describe('METHOD onDelete: output idToDelete', () => {
    let fakeActivity: Activity = createFakeActivity();

    When(() => {
      componentUnderTest.onDelete(fakeActivity);
    });

    describe('GIVEN an activity to delete', () => {
      Given(() => {
        idToDeleteSpy = subscribeSpyTo(componentUnderTest.idToDelete);
      });
      Then('Delete the activity', () => {
        expect(idToDeleteSpy.getFirstValue()).toEqual(fakeActivity.id);
      });
    });
  });
});

// PRE-BUILT TESTS
describe('ActivitiesListComponent', () => {
  let component: ActivitiesListComponent;
  let fixture: ComponentFixture<ActivitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Output an idToDelete', () => {
    let fakeActivity = createFakeActivity();
    // I found this approach in the Angular doc (https://angular.io/guide/testing-components-basics#component-class-testing)
    component.idToDelete.subscribe((id: number) => {
      expect(id).toBe(fakeActivity.id);
    });
    component.onDelete(fakeActivity);
  });
});

function createFakeActivity(): Activity {
  return {
    id: 1,
    date: new Date(2021, 2, 1),
    type: 'stretching',
    duration: 90,
    notes: 'HyPro',
    feelingColor: FeelingColors.green,
    feeling: 'good',
    link: new URL('https://www.google.com'),
  };
}

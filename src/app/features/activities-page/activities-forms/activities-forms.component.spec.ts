import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ObserverSpy, subscribeSpyTo } from '@hirez_io/observer-spy';

import { ActivitiesFormsComponent } from './activities-forms.component';

import { FeelingColors, Activity } from 'src/app/_models/activity';
import { SimpleChanges } from '@angular/core';

describe('ActivitiesFormsComponent', () => {
  let componentUnderTest: ActivitiesFormsComponent;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesFormsComponent, FormBuilder],
    });

    componentUnderTest = TestBed.inject(ActivitiesFormsComponent);
  });

  // describe('METHOD: onChanges', () => {
  //   let simpleChanges: SimpleChanges;
  //   When(() => {
  //      componentUnderTest.ngOnChanges(simpleChanges)
  //   });

  //   describe('GIVEN An Input Activity is received', () => {

  //     Given(() => {
  //       componentUnderTest.activityToEdit = createFakeActivity();
  //       simpleChanges = new SimpleChanges(null, componentUnderTest.activityToEdit, true);
  //     });
  //     Then('The form is filled with that Activity data',() => {
  //        expect(componentUnderTest.activityForm.value).toEqual(componentUnderTest.activityToEdit);
  //     });
  //   });
  // });

  describe('METHOD onSubmit: output newActivity', () => {
    let newActivitySpy: ObserverSpy<any>;
    When(() => {
      componentUnderTest.onSubmit();
    });

    describe('GIVEN form is filled correctly', () => {
      Given(() => {
        newActivitySpy = subscribeSpyTo(componentUnderTest.emitActivity);
        componentUnderTest.activityForm.setValue(createFakeFormData());
      });
      Then('form is valid and newActivity is emitted', () => {
        expect(componentUnderTest.activityForm.valid).toBeTrue();
        expect(newActivitySpy.getFirstValue()).toEqual(createFakeFormData());
      });
    });
  });

  describe('Form validators', () => {
    describe('GIVEN form only has REQUIRED fields', () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormRequiredData());
      });
      Then('form is valid', () => {
        expect(componentUnderTest.activityForm.valid).toBeTrue();
      });
    });

    describe("GIVEN form has no 'type' (required)", () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue({ type: null });
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });

    describe("GIVEN form only has no 'duration' (required) field", () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue({ duration: null });
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });

    describe("GIVEN form only has invalid 'duration' field (0)", () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue({ duration: 0 });
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });

    describe("GIVEN form only has invalid 'duration' field (string)", () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue({
          duration: 'fakeDuration',
        });
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });
  });
});

// PRE-BUILT TESTS
describe('ActivitiesFormsComponent', () => {
  let component: ActivitiesFormsComponent;
  let fixture: ComponentFixture<ActivitiesFormsComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ActivitiesFormsComponent],
    }).compileComponents();
    formBuilder = new FormBuilder()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesFormsComponent);
    component = fixture.componentInstance;
    component.activityForm = formBuilder.group(createFakeFormData());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Output an Activity', () => {
    // I found this approach in the Angular doc (https://angular.io/guide/testing-components-basics#component-class-testing)
    component.emitActivity.subscribe((act: Activity) =>
      expect(act).toEqual(component.activityForm.value)
    );
    component.onSubmit();
  });
});

function createFakeFormData(): Partial<Activity> {
  return {
    date: new Date(2021, 2, 1),
    type: 'stretching',
    duration: 90,
    feeling: 'good',
    feelingColor: FeelingColors.green,
    notes: 'nothing',
    link: new URL('https://www.google.com'),
  };
}

function createFakeFormRequiredData(): Partial<Activity> {
  return {
    date: null,
    type: 'stretching',
    duration: 90,
    feeling: null,
    feelingColor: null,
    notes: null,
    link: null,
  };
}

function createFakeActivity(): Activity {
  return {
    id: 1,
    date: new Date(2021, 2, 2),
    type: 'swimming',
    duration: 30,
    feeling: 'bad',
    feelingColor: FeelingColors.red,
    notes: 'something',
    link: new URL('https://www.youtube.com'),
  };
}

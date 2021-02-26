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
      componentUnderTest.onSubmit(componentUnderTest.activityForm.value);
    });

    describe('GIVEN form is filled correctly and submitted', () => {
      Given(() => {
        newActivitySpy = subscribeSpyTo(componentUnderTest.emitActivity);
        componentUnderTest.activityForm.setValue(createFakeFormData());
      });
      Then('newActivity is emitted', () => {
        expect(newActivitySpy.getFirstValue()).toEqual(createFakeFormData());
      });
      Then('Form is reset', () => {
        expect(componentUnderTest.activityForm.value).toEqual(createFakeEmptyForm());
      });
      Then('Form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });
  });

  // TODO: form is empty, form is completely filled in
  describe('Form validators', () => {
    describe('GIVEN form is completely filled', () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
      });
      Then('form is valid', () => {
        expect(componentUnderTest.activityForm.valid).toBeTrue();
      });
    });

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

    describe("GIVEN form is empty", () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeEmptyForm());
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
    component.onSubmit(component.activityForm.value);
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

function createFakeEmptyForm(): Partial<Activity> {
  return {
    date: null,
    type: null,
    duration: null,
    feeling: null,
    feelingColor: null,
    notes: null,
    link: null,
  };
}


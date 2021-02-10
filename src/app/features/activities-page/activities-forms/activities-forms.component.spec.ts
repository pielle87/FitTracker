import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ObserverSpy, subscribeSpyTo } from '@hirez_io/observer-spy';

import { ActivitiesFormsComponent } from './activities-forms.component';

import { FeelingColors, Activity } from 'src/app/_models/activity';


// USING SPIES ETC.
describe('ActivitiesFormsComponent', () => {
  let componentUnderTest: ActivitiesFormsComponent;
  let newActivitySpy: ObserverSpy<any>;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivitiesFormsComponent,
        FormBuilder
      ]
    });

    componentUnderTest = TestBed.inject(ActivitiesFormsComponent);
  });

  describe('Output newActivity', () => {
    When(() => {
      componentUnderTest.onSubmit()
    });

    describe('GIVEN form is filled correctly', () => {
      Given(() => {
        newActivitySpy = subscribeSpyTo(componentUnderTest.newActivity);
        componentUnderTest.activityForm.setValue(createFakeFormData());
      });
      Then('form is valid and newActivity is emitted',() => {
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
        componentUnderTest.activityForm.patchValue( {type: null} );
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });

    describe('GIVEN form only has no \'duration\' (required) field', () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue( {duration: null} );
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });

    describe('GIVEN form only has invalid \'duration\' field (0)', () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue( {duration: 0} );
      });
      Then('form is invalid', () => {
        expect(componentUnderTest.activityForm.valid).toBeFalse();
      });
    });

    describe('GIVEN form only has invalid \'duration\' field (string)', () => {
      Given(() => {
        componentUnderTest.activityForm.setValue(createFakeFormData());
        componentUnderTest.activityForm.patchValue( {duration: 'fakeDuration'} );
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
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ActivitiesFormsComponent ]
    })
    .compileComponents();
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
    component.newActivity.subscribe((act: Activity) => expect(act).toEqual(component.activityForm.value));
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
      link: new URL("https://www.google.com"),
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

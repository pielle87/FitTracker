import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ActivitiesFormsComponent } from './activities-forms.component';

import { Spy, provideAutoSpy } from 'jasmine-auto-spies';

describe('ActivitiesFormsComponent', () => {
  let componentUnderTest: ActivitiesFormsComponent;
  let FormBuilderSpy: Spy<FormBuilder>;
  let actualResult: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivitiesFormsComponent,
        provideAutoSpy(FormBuilder),
      ]
    });

    componentUnderTest = TestBed.inject(ActivitiesFormsComponent);
    FormBuilderSpy = TestBed.inject<any>(FormBuilder);

    actualResult = undefined;

  });

  describe('METHOD: ngOnInit', () => {

    When(() => {
      componentUnderTest.ngOnInit();
    });

    describe('GIVEN TODO write test', () => {
      Given(() => {
        // TODO write test
        
      });
      Then('TODO write test', () => {
        // TODO write test
      });
    });

  });
});



// PRE-BUILT TESTS
describe('ActivitiesFormsComponent', () => {
  let component: ActivitiesFormsComponent;
  let fixture: ComponentFixture<ActivitiesFormsComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

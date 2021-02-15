import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { createSpyFromClass, provideAutoSpy, Spy } from 'jasmine-auto-spies';
import { Component, Input } from '@angular/core';

import { ActivitiesPageComponent } from './activities-page.component';
import { Activity } from 'src/app/_models/activity';
import { LoginService } from 'src/app/core/services/login.service';

xdescribe('ActivitiesPageComponent', () => {
  let componentUnderTest: ActivitiesPageComponent;
  let activitiesServiceSpy: Spy<ActivitiesService>;
  let loginServiceSpy: Spy<LoginService>;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivitiesPageComponent,
        provideAutoSpy(ActivitiesService),
        provideAutoSpy(LoginService),
      ],
    });

    componentUnderTest = TestBed.inject(ActivitiesPageComponent);
    activitiesServiceSpy = TestBed.inject<any>(ActivitiesService);
    loginServiceSpy = createSpyFromClass(LoginService, {
      gettersToSpyOn: ['isLogged$'],
    })
  });

  describe('METHOD: ngOnInit', () => {
    When(() => {
      componentUnderTest.ngOnInit();  // "TypeError: this.loginService.isLogged$.subscribe is not a function"
    });

    describe('GIVEN initalization THEN populate array', () => {
      Given(() => {
        console.log(loginServiceSpy.accessorSpies.getters.isLogged$.and.resolveTo(true)); // "LOG: function wrap() { ... }"
        loginServiceSpy.accessorSpies.getters.isLogged$.and.returnValue(true);
        activitiesServiceSpy.getActivities.and.returnValue(fakeData);
      });
      Then('populate array', () => {
        expect(componentUnderTest.activities.length).toEqual(1);
      });
      Then('check isLogged value', () => {
        expect(loginServiceSpy.isLogged$).toBeTrue();
      });
    });
  });
});

const fakeData = [
  {
    date: new Date(2021, 2, 1),
    type: 'stretching',
    duration: 90,
  },
];

// PRE-BUILT TESTS
fdescribe('(old)ActivitiesPageComponent', () => {
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

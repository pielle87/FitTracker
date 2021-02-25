import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';

import { Spy, provideAutoSpy } from 'jasmine-auto-spies';
import { LoginService } from 'src/app/core/services/login.service';
import { UserCredentials } from 'src/app/_models/user-credentials.type';

describe('LoginPageComponent', () => {
  let componentUnderTest: LoginPageComponent;
  let loginServiceSpy: Spy<LoginService>;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [LoginPageComponent, provideAutoSpy(LoginService),]
    });

    componentUnderTest = TestBed.inject(LoginPageComponent);
    loginServiceSpy = TestBed.inject<any>(LoginService);
  });

  describe('METHOD: onSubmit', () => {
    let fakeCredentials: UserCredentials;
    When(() => {
      componentUnderTest.onSubmit();
    });

    describe('GIVEN values are submitted', () => {
      Given(() => {
        componentUnderTest.loginForm.setValue(createFakeCredentials());
        fakeCredentials = createFakeCredentials();
      });
      Then('Login is called with valide credentials', () => {
        expect(loginServiceSpy.login).toHaveBeenCalledWith(fakeCredentials);
      });
      Then('Form is reset', () => {
        expect(componentUnderTest.loginForm.value).toEqual(createResettedCredentials());
      });
      Then('Form is valid', () => {
        expect(componentUnderTest.loginForm.valid).toBeTrue();
      });
    });
  });

  describe('METHOD: onLogout', () => {
    When(() => {
      componentUnderTest.onLogout();
    });
    Then('Logout is called', () => {
      expect(loginServiceSpy.logout).toHaveBeenCalled();
    });
  });
});

// PRE-BUILT TESTS
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function createFakeCredentials(): UserCredentials {
  return {
      username: 'pippo',
      password: '1234',
    };
}

function createResettedCredentials(): UserCredentials {
  return {
      username: null,
      password: null,
    };
}

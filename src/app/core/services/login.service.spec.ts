

import { TestBed } from '@angular/core/testing';
import { Spy, provideAutoSpy } from 'jasmine-auto-spies';
import { UserCredentials } from 'src/app/_models/user-credentials.type';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let serviceUnderTest: LoginService;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });

    serviceUnderTest = TestBed.inject(LoginService);
  });

  describe('METHOD: (constructor)', () => {
    describe('GIVEN initialization', () => {
      Then('check default values of BehaviorSubjects',() => {
        serviceUnderTest.user$.subscribe(username => expect(username).toEqual('Guest'));
        serviceUnderTest.isLogged$.subscribe(isLogged => expect(isLogged).toBeTrue());
      });
    });
  });

  describe('METHOD: login', () => {
    let fakeCredentials: UserCredentials;
    When(() => {
      serviceUnderTest.login(fakeCredentials);
    });

    describe('GIVEN login attempt', () => {
      Given(() => {
        fakeCredentials = { username: 'pippo', password: '1234'}
      });
      Then('user is logged in',() => {
        serviceUnderTest.user$.subscribe(cred => expect(cred).toEqual(fakeCredentials.username));
        serviceUnderTest.isLogged$.subscribe(isLogged => expect(isLogged).toBeTrue());
      });
    });
  });

  describe('METHOD: login without username', () => {
    let fakeCredentials: UserCredentials;
    When(() => {
      serviceUnderTest.login(fakeCredentials);
    });

    describe('GIVEN login attempt without username', () => {
      Given(() => {
        fakeCredentials = { username: '', password: '1234'}
      });
      Then('user is logged in',() => {
        // user 'pielle' is logged in when no user is provided
        serviceUnderTest.user$.subscribe(username => expect(username).toEqual('pielle'));
        serviceUnderTest.isLogged$.subscribe(isLogged => expect(isLogged).toBeTrue());
      });
    });
  });

  describe('METHOD: logout', () => {
    When(() => {
      serviceUnderTest.logout();
    });

    describe('GIVEN logout attempt', () => {
      Then('user is logged out',() => {
        serviceUnderTest.user$.subscribe(username => expect(username).toEqual('Guest'));
        serviceUnderTest.isLogged$.subscribe(isLogged => expect(isLogged).toBeFalse());
      });
    });
  });
});


// PRE-BUILT TESTS
describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

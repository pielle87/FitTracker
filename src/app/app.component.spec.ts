import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let componentUnderTest: AppComponent;
  let actualResult: number;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent]
    });

    componentUnderTest = TestBed.inject(AppComponent);
    actualResult = undefined;
  });

  describe('METHOD: ngOnInit', () => {

    When(() => {
      componentUnderTest.ngOnInit();
    });

    describe('GIVEN initalization THEN populate array', () => {
      Given(() => {
        // initalization
        actualResult = 2
      });
      Then('populate array', () => {
        // populate array
        expect(componentUnderTest.activities.length).toEqual(actualResult);
      });
    });

  });
});

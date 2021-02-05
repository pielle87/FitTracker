import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// PRE-BUILT TESTS
describe('AppComponent', () => {
  let componentUnderTest: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    componentUnderTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentUnderTest).toBeTruthy();
  });
});

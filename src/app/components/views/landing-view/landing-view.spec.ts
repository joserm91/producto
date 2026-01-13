import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LandingView } from './landing-view';

describe('LandingView', () => {
  let component: LandingView;
  let fixture: ComponentFixture<LandingView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingView],
      providers: [
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

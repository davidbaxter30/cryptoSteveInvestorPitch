import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentSliderComponent } from './investment-slider.component';

describe('InvestmentSliderComponent', () => {
  let component: InvestmentSliderComponent;
  let fixture: ComponentFixture<InvestmentSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDayWiseProduction } from './view-day-wise-production';

describe('ViewDayWiseProduction', () => {
  let component: ViewDayWiseProduction;
  let fixture: ComponentFixture<ViewDayWiseProduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDayWiseProduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDayWiseProduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

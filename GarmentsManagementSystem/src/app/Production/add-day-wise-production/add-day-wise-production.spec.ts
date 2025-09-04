import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDayWiseProduction } from './add-day-wise-production';

describe('AddDayWiseProduction', () => {
  let component: AddDayWiseProduction;
  let fixture: ComponentFixture<AddDayWiseProduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDayWiseProduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDayWiseProduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

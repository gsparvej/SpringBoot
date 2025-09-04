import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAttendance } from './view-all-attendance';

describe('ViewAllAttendance', () => {
  let component: ViewAllAttendance;
  let fixture: ComponentFixture<ViewAllAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

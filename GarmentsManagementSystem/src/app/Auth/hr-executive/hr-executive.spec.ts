import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrExecutive } from './hr-executive';

describe('HrExecutive', () => {
  let component: HrExecutive;
  let fixture: ComponentFixture<HrExecutive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrExecutive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrExecutive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

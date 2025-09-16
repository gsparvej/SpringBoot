import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAdminProfile } from './hr-admin-profile';

describe('HrAdminProfile', () => {
  let component: HrAdminProfile;
  let fixture: ComponentFixture<HrAdminProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrAdminProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrAdminProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminProfile } from './super-admin-profile';

describe('SuperAdminProfile', () => {
  let component: SuperAdminProfile;
  let fixture: ComponentFixture<SuperAdminProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperAdminProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

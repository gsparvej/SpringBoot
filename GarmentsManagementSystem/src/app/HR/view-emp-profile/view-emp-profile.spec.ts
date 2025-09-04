import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpProfile } from './view-emp-profile';

describe('ViewEmpProfile', () => {
  let component: ViewEmpProfile;
  let fixture: ComponentFixture<ViewEmpProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEmpProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

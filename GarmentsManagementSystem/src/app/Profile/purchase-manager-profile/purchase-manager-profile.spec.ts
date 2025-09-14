import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseManagerProfile } from './purchase-manager-profile';

describe('PurchaseManagerProfile', () => {
  let component: PurchaseManagerProfile;
  let fixture: ComponentFixture<PurchaseManagerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseManagerProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseManagerProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

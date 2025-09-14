import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionManagerProfile } from './production-manager-profile';

describe('ProductionManagerProfile', () => {
  let component: ProductionManagerProfile;
  let fixture: ComponentFixture<ProductionManagerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionManagerProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionManagerProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

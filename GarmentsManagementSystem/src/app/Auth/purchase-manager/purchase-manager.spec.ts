import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseManager } from './purchase-manager';

describe('PurchaseManager', () => {
  let component: PurchaseManager;
  let fixture: ComponentFixture<PurchaseManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseExecutive } from './purchase-executive';

describe('PurchaseExecutive', () => {
  let component: PurchaseExecutive;
  let fixture: ComponentFixture<PurchaseExecutive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseExecutive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseExecutive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

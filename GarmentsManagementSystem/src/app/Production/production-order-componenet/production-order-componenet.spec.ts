import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderComponenet } from './production-order-componenet';

describe('ProductionOrderComponenet', () => {
  let component: ProductionOrderComponenet;
  let fixture: ComponentFixture<ProductionOrderComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionOrderComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOrderComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

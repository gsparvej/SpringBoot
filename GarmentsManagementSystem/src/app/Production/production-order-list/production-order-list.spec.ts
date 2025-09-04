import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderList } from './production-order-list';

describe('ProductionOrderList', () => {
  let component: ProductionOrderList;
  let fixture: ComponentFixture<ProductionOrderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionOrderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOrderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

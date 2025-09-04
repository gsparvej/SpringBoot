import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSummaryCompo } from './production-summary-compo';

describe('ProductionSummaryCompo', () => {
  let component: ProductionSummaryCompo;
  let fixture: ComponentFixture<ProductionSummaryCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionSummaryCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionSummaryCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

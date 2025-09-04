import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionReport } from './production-report';

describe('ProductionReport', () => {
  let component: ProductionReport;
  let fixture: ComponentFixture<ProductionReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

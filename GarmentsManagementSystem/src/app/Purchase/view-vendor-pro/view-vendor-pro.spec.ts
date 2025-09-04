import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorPro } from './view-vendor-pro';

describe('ViewVendorPro', () => {
  let component: ViewVendorPro;
  let fixture: ComponentFixture<ViewVendorPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVendorPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVendorPro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

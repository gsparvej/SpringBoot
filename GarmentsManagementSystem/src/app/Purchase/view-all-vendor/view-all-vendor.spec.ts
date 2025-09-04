import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVendor } from './view-all-vendor';

describe('ViewAllVendor', () => {
  let component: ViewAllVendor;
  let fixture: ComponentFixture<ViewAllVendor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllVendor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllVendor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

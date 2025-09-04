import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendor } from './add-vendor';

describe('AddVendor', () => {
  let component: AddVendor;
  let fixture: ComponentFixture<AddVendor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVendor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVendor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

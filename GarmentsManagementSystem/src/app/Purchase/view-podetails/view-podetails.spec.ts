import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPODetails } from './view-podetails';

describe('ViewPODetails', () => {
  let component: ViewPODetails;
  let fixture: ComponentFixture<ViewPODetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPODetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPODetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

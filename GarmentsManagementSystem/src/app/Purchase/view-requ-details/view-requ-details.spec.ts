import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequDetails } from './view-requ-details';

describe('ViewRequDetails', () => {
  let component: ViewRequDetails;
  let fixture: ComponentFixture<ViewRequDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRequDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRequDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

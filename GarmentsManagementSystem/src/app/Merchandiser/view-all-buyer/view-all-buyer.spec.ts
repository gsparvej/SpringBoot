import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBuyer } from './view-all-buyer';

describe('ViewAllBuyer', () => {
  let component: ViewAllBuyer;
  let fixture: ComponentFixture<ViewAllBuyer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllBuyer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllBuyer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

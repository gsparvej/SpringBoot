import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfViewOrder } from './half-view-order';

describe('HalfViewOrder', () => {
  let component: HalfViewOrder;
  let fixture: ComponentFixture<HalfViewOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalfViewOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfViewOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

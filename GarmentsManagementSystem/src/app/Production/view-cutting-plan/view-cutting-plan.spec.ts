import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuttingPlan } from './view-cutting-plan';

describe('ViewCuttingPlan', () => {
  let component: ViewCuttingPlan;
  let fixture: ComponentFixture<ViewCuttingPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCuttingPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCuttingPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

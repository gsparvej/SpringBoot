import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCuttingPlanComponent } from './add-cutting-plan-component';

describe('AddCuttingPlanComponent', () => {
  let component: AddCuttingPlanComponent;
  let fixture: ComponentFixture<AddCuttingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCuttingPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCuttingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

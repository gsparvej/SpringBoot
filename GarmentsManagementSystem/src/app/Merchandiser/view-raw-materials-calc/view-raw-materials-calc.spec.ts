import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRawMaterialsCalc } from './view-raw-materials-calc';

describe('ViewRawMaterialsCalc', () => {
  let component: ViewRawMaterialsCalc;
  let fixture: ComponentFixture<ViewRawMaterialsCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRawMaterialsCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRawMaterialsCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

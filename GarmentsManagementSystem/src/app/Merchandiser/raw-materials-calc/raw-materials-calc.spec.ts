import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialsCalc } from './raw-materials-calc';

describe('RawMaterialsCalc', () => {
  let component: RawMaterialsCalc;
  let fixture: ComponentFixture<RawMaterialsCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMaterialsCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialsCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUom } from './view-all-uom';

describe('ViewAllUom', () => {
  let component: ViewAllUom;
  let fixture: ComponentFixture<ViewAllUom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllUom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllUom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

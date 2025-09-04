import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBom } from './view-all-bom';

describe('ViewAllBom', () => {
  let component: ViewAllBom;
  let fixture: ComponentFixture<ViewAllBom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllBom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllBom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

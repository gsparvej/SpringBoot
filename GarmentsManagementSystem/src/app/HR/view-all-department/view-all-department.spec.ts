import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDepartment } from './view-all-department';

describe('ViewAllDepartment', () => {
  let component: ViewAllDepartment;
  let fixture: ComponentFixture<ViewAllDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

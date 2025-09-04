import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRequ } from './view-all-requ';

describe('ViewAllRequ', () => {
  let component: ViewAllRequ;
  let fixture: ComponentFixture<ViewAllRequ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllRequ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllRequ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLeave } from './view-all-leave';

describe('ViewAllLeave', () => {
  let component: ViewAllLeave;
  let fixture: ComponentFixture<ViewAllLeave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllLeave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLeave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

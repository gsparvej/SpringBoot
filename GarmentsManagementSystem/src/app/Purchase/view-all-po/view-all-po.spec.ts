import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPO } from './view-all-po';

describe('ViewAllPO', () => {
  let component: ViewAllPO;
  let fixture: ComponentFixture<ViewAllPO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllPO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllPO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

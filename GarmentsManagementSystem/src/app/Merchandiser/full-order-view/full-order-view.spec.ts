import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullOrderView } from './full-order-view';

describe('FullOrderView', () => {
  let component: FullOrderView;
  let fixture: ComponentFixture<FullOrderView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullOrderView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullOrderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

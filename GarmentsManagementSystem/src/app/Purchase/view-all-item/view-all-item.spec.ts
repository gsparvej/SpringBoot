import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllItem } from './view-all-item';

describe('ViewAllItem', () => {
  let component: ViewAllItem;
  let fixture: ComponentFixture<ViewAllItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

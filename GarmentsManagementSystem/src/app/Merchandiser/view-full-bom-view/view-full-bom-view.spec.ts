import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullBomView } from './view-full-bom-view';

describe('ViewFullBomView', () => {
  let component: ViewFullBomView;
  let fixture: ComponentFixture<ViewFullBomView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFullBomView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFullBomView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCutBundle } from './view-cut-bundle';

describe('ViewCutBundle', () => {
  let component: ViewCutBundle;
  let fixture: ComponentFixture<ViewCutBundle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCutBundle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCutBundle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

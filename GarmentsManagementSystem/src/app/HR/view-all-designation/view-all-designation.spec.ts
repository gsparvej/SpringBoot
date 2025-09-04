import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDesignation } from './view-all-designation';

describe('ViewAllDesignation', () => {
  let component: ViewAllDesignation;
  let fixture: ComponentFixture<ViewAllDesignation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllDesignation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDesignation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

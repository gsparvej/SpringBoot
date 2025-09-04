import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCutBundle } from './add-cut-bundle';

describe('AddCutBundle', () => {
  let component: AddCutBundle;
  let fixture: ComponentFixture<AddCutBundle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCutBundle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCutBundle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

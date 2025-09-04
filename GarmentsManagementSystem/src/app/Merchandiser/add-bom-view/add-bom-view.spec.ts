import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBomView } from './add-bom-view';

describe('AddBomView', () => {
  let component: AddBomView;
  let fixture: ComponentFixture<AddBomView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBomView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBomView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

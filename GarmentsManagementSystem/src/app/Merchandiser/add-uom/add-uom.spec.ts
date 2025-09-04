import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUom } from './add-uom';

describe('AddUom', () => {
  let component: AddUom;
  let fixture: ComponentFixture<AddUom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

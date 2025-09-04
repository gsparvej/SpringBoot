import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBom } from './add-bom';

describe('AddBom', () => {
  let component: AddBom;
  let fixture: ComponentFixture<AddBom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

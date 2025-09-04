import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemList } from './add-item-list';

describe('AddItemList', () => {
  let component: AddItemList;
  let fixture: ComponentFixture<AddItemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItemList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

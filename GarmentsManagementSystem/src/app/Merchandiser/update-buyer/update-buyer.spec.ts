import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuyer } from './update-buyer';

describe('UpdateBuyer', () => {
  let component: UpdateBuyer;
  let fixture: ComponentFixture<UpdateBuyer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBuyer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBuyer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

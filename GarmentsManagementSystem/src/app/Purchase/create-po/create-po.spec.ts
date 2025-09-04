import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePO } from './create-po';

describe('CreatePO', () => {
  let component: CreatePO;
  let fixture: ComponentFixture<CreatePO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

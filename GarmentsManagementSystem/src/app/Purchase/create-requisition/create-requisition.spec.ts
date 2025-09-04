import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequisition } from './create-requisition';

describe('CreateRequisition', () => {
  let component: CreateRequisition;
  let fixture: ComponentFixture<CreateRequisition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRequisition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRequisition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

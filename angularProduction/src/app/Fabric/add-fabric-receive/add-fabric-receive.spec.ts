import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFabricReceive } from './add-fabric-receive';

describe('AddFabricReceive', () => {
  let component: AddFabricReceive;
  let fixture: ComponentFixture<AddFabricReceive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFabricReceive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFabricReceive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

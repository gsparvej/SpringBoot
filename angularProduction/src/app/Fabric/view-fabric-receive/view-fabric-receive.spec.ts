import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFabricReceive } from './view-fabric-receive';

describe('ViewFabricReceive', () => {
  let component: ViewFabricReceive;
  let fixture: ComponentFixture<ViewFabricReceive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFabricReceive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFabricReceive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

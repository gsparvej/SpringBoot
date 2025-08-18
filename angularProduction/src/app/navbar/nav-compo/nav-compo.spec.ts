import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCompo } from './nav-compo';

describe('NavCompo', () => {
  let component: NavCompo;
  let fixture: ComponentFixture<NavCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiserJunior } from './merchandiser-junior';

describe('MerchandiserJunior', () => {
  let component: MerchandiserJunior;
  let fixture: ComponentFixture<MerchandiserJunior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchandiserJunior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandiserJunior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

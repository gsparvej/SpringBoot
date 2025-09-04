import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiserManager } from './merchandiser-manager';

describe('MerchandiserManager', () => {
  let component: MerchandiserManager;
  let fixture: ComponentFixture<MerchandiserManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchandiserManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandiserManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

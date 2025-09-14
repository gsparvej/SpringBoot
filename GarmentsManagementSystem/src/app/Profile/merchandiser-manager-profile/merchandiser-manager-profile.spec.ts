import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiserManagerProfile } from './merchandiser-manager-profile';

describe('MerchandiserManagerProfile', () => {
  let component: MerchandiserManagerProfile;
  let fixture: ComponentFixture<MerchandiserManagerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchandiserManagerProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandiserManagerProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

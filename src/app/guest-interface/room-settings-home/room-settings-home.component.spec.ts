import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSettingsHomeComponent } from './room-settings-home.component';

describe('RoomSettingsHomeComponent', () => {
  let component: RoomSettingsHomeComponent;
  let fixture: ComponentFixture<RoomSettingsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSettingsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSettingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

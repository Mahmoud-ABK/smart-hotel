import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRoomMenuComponent } from './guest-room-menu.component';

describe('GuestRoomMenuComponent', () => {
  let component: GuestRoomMenuComponent;
  let fixture: ComponentFixture<GuestRoomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRoomMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRoomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

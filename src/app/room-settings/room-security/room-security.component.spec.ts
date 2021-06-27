import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSecurityComponent } from './room-security.component';

describe('RoomSecurityComponent', () => {
  let component: RoomSecurityComponent;
  let fixture: ComponentFixture<RoomSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomServicesComponent } from './room-services.component';

describe('RoomServicesComponent', () => {
  let component: RoomServicesComponent;
  let fixture: ComponentFixture<RoomServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReportMenuComponent } from './room-report-menu.component';

describe('RoomReportMenuComponent', () => {
  let component: RoomReportMenuComponent;
  let fixture: ComponentFixture<RoomReportMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomReportMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReportMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

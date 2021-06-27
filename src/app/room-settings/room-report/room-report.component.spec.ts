import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReportComponent } from './room-report.component';

describe('RoomReportComponent', () => {
  let component: RoomReportComponent;
  let fixture: ComponentFixture<RoomReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

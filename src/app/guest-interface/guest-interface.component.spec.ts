import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestInterfaceComponent } from './guest-interface.component';

describe('GuestInterfaceComponent', () => {
  let component: GuestInterfaceComponent;
  let fixture: ComponentFixture<GuestInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

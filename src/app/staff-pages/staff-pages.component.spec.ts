import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPagesComponent } from './staff-pages.component';

describe('StaffPagesComponent', () => {
  let component: StaffPagesComponent;
  let fixture: ComponentFixture<StaffPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

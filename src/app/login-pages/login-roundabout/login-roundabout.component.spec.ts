import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRoundaboutComponent } from './login-roundabout.component';

describe('LoginRoundaboutComponent', () => {
  let component: LoginRoundaboutComponent;
  let fixture: ComponentFixture<LoginRoundaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRoundaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRoundaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

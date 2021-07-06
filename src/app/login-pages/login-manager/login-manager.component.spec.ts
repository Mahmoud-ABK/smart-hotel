import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManagerComponent } from './login-manager.component';

describe('LoginManagerComponent', () => {
  let component: LoginManagerComponent;
  let fixture: ComponentFixture<LoginManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

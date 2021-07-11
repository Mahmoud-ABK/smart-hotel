import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginServantPageComponent } from './login-servant-page.component';

describe('LoginServantPageComponent', () => {
  let component: LoginServantPageComponent;
  let fixture: ComponentFixture<LoginServantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginServantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginServantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

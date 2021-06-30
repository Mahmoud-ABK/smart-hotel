import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPageLoginComponent } from './kitchen-page-login.component';

describe('KitchenPageLoginComponent', () => {
  let component: KitchenPageLoginComponent;
  let fixture: ComponentFixture<KitchenPageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenPageLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

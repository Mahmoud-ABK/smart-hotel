import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServantPageComponent } from './servant-page.component';

describe('ServantPageComponent', () => {
  let component: ServantPageComponent;
  let fixture: ComponentFixture<ServantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

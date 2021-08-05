import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingOutComponent } from './checking-out.component';

describe('CheckingOutComponent', () => {
  let component: CheckingOutComponent;
  let fixture: ComponentFixture<CheckingOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

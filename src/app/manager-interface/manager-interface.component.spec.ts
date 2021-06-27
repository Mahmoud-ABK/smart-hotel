import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerInterfaceComponent } from './manager-interface.component';

describe('ManagerInterfaceComponent', () => {
  let component: ManagerInterfaceComponent;
  let fixture: ComponentFixture<ManagerInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

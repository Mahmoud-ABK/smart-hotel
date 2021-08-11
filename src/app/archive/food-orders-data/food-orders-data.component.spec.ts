import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrdersDataComponent } from './food-orders-data.component';

describe('FoodOrdersDataComponent', () => {
  let component: FoodOrdersDataComponent;
  let fixture: ComponentFixture<FoodOrdersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrdersDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrdersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

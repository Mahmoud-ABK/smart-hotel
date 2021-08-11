import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningdataComponent } from './cleaningdata.component';

describe('CleaningdataComponent', () => {
  let component: CleaningdataComponent;
  let fixture: ComponentFixture<CleaningdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

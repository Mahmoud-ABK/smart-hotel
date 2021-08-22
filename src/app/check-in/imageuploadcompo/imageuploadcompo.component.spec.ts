import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageuploadcompoComponent } from './imageuploadcompo.component';

describe('ImageuploadcompoComponent', () => {
  let component: ImageuploadcompoComponent;
  let fixture: ComponentFixture<ImageuploadcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageuploadcompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageuploadcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

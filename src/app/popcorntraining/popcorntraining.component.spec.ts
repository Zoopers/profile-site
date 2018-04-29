import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopcorntrainingComponent } from './popcorntraining.component';

describe('PopcorntrainingComponent', () => {
  let component: PopcorntrainingComponent;
  let fixture: ComponentFixture<PopcorntrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcorntrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopcorntrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

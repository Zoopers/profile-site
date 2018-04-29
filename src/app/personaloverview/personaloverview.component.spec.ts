import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaloverviewComponent } from './personaloverview.component';

describe('PersonaloverviewComponent', () => {
  let component: PersonaloverviewComponent;
  let fixture: ComponentFixture<PersonaloverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaloverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaloverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnisaComponent } from './unisa.component';

describe('UnisaComponent', () => {
  let component: UnisaComponent;
  let fixture: ComponentFixture<UnisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

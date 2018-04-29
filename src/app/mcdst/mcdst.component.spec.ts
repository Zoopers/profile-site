import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McdstComponent } from './mcdst.component';

describe('McdstComponent', () => {
  let component: McdstComponent;
  let fixture: ComponentFixture<McdstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McdstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McdstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

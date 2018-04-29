import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatialdimensionComponent } from './spatialdimension.component';

describe('SpatialdimensionComponent', () => {
  let component: SpatialdimensionComponent;
  let fixture: ComponentFixture<SpatialdimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpatialdimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpatialdimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

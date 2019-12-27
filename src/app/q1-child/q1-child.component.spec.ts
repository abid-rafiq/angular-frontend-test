import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1ChildComponent } from './q1-child.component';

describe('Q1ChildComponent', () => {
  let component: Q1ChildComponent;
  let fixture: ComponentFixture<Q1ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q1ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

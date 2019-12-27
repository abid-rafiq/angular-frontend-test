import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2Lazydata2Component } from './q2-lazydata2.component';

describe('Q2Lazydata2Component', () => {
  let component: Q2Lazydata2Component;
  let fixture: ComponentFixture<Q2Lazydata2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q2Lazydata2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q2Lazydata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

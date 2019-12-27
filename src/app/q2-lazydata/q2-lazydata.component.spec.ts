import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2LazydataComponent } from './q2-lazydata.component';

describe('Q2LazydataComponent', () => {
  let component: Q2LazydataComponent;
  let fixture: ComponentFixture<Q2LazydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q2LazydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q2LazydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

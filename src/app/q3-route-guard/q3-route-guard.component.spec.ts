import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3RouteGuardComponent } from './q3-route-guard.component';

describe('Q3RouteGuardComponent', () => {
  let component: Q3RouteGuardComponent;
  let fixture: ComponentFixture<Q3RouteGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q3RouteGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q3RouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

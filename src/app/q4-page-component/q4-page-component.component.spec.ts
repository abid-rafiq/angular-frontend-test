import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4PageComponentComponent } from './q4-page-component.component';

describe('Q4PageComponentComponent', () => {
  let component: Q4PageComponentComponent;
  let fixture: ComponentFixture<Q4PageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q4PageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4PageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

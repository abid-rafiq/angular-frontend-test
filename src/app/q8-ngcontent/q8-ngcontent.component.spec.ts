import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q8NgcontentComponent } from './q8-ngcontent.component';

describe('Q8NgcontentComponent', () => {
  let component: Q8NgcontentComponent;
  let fixture: ComponentFixture<Q8NgcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q8NgcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q8NgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTrakingDetailsComponent } from './issue-traking-details.component';

describe('IssueTrakingDetailsComponent', () => {
  let component: IssueTrakingDetailsComponent;
  let fixture: ComponentFixture<IssueTrakingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTrakingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTrakingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

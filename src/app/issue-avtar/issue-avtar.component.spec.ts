import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAvtarComponent } from './issue-avtar.component';

describe('IssueAvtarComponent', () => {
  let component: IssueAvtarComponent;
  let fixture: ComponentFixture<IssueAvtarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueAvtarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueAvtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailMetaBodyContainerPart1Component } from './issue-detail-meta-body-container-part1.component';

describe('IssueDetailMetaBodyContainerPart1Component', () => {
  let component: IssueDetailMetaBodyContainerPart1Component;
  let fixture: ComponentFixture<IssueDetailMetaBodyContainerPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailMetaBodyContainerPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailMetaBodyContainerPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

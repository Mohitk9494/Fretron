import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailMetaBodyContainerPart2Component } from './issue-detail-meta-body-container-part2.component';

describe('IssueDetailMetaBodyContainerPart2Component', () => {
  let component: IssueDetailMetaBodyContainerPart2Component;
  let fixture: ComponentFixture<IssueDetailMetaBodyContainerPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailMetaBodyContainerPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailMetaBodyContainerPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

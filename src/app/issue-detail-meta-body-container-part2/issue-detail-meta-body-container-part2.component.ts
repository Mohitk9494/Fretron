import { Component, OnInit ,EventEmitter,Output, Input} from '@angular/core';

@Component({
  selector: 'app-issue-detail-meta-body-container-part2',
  templateUrl: './issue-detail-meta-body-container-part2.component.html',
  styleUrls: ['./issue-detail-meta-body-container-part2.component.css']
})
export class IssueDetailMetaBodyContainerPart2Component implements OnInit {
 @Output() commentAction= new EventEmitter<any>()
  @Input() selectedTabfour:number
  
  constructor() { }

  ngOnInit(): void {
  }
  getCommentAction(event){
    this.commentAction.emit(event)
  }

}

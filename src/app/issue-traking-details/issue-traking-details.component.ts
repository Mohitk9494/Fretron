import { Component, OnInit,AfterViewInit, Inject,ViewChildren,ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import {defer,fromEvent,merge} from 'rxjs';
@Component({
  selector: 'app-issue-traking-details',
  templateUrl: './issue-traking-details.component.html',
  styleUrls: ['./issue-traking-details.component.css']
})
export class IssueTrakingDetailsComponent implements OnInit, AfterViewInit {
  // step:boolean = true;    
  // sticky: boolean = false;
  elementPosition: any;
  public show:boolean = true;
  public show1:boolean = true;
  public show2:boolean = true;
  public show3:boolean = true;
  public maticontype:any = 'keyboard_arrow_up';
  public maticontype1:any = 'keyboard_arrow_down';
  public maticontype2:any = 'keyboard_arrow_down';
  public maticontype3:any = 'keyboard_arrow_down';
  @ViewChild("info") infoDiv :any;
  @ViewChild("subIssue") subIssueDiv :any;
  @ViewChild("collabrators") collabratorsDiv :any;
  @ViewChild("comments") commentsDiv :any;
  @ViewChildren('wrapper') wrapper:  any;
  @ViewChild('container') containerDiv: any;
  @ViewChild('subcontainer') subcontainerDiv: any;
  @ViewChild('Description') Description: any;
  @ViewChild('changeDescription') changeDescription:any;
  public isDescriptionDisable:boolean = true;


  // public containerDivScrolling$ = defer(() => fromEvent(this.containerDiv.nativeElement,"scroll"));
  public subcontainerDivScrolling$ = defer(() => fromEvent(this.subcontainerDiv.nativeElement,"scroll"));
  
  selectedTab =1;
  elementPostions: any[] = [];
  commentViewDown: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<IssueTrakingDetailsComponent>) {
    console.log(data);
    
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.subcontainerDivScrolling$
    .subscribe((res: any) => {
      this.elementPostions = [
        this.infoDiv,
        this.subIssueDiv,
        this.collabratorsDiv,
        this.commentsDiv,
      ].map((element: any) =>
        element
          ? {
            offsetTop: element.nativeElement.offsetTop,
            clientHeight: element.nativeElement.clientHeight,
          }
          : {}
      );

      // console.log(res)

      const scrollTop = res.target.scrollTop;
      const clientHeight = res.target.clientHeight;
      const scrollHeight = res.target.scrollHeight;

      const per = ((clientHeight + scrollTop) / scrollHeight) * 100;

      if (per > 95) {
        this.commentViewDown = false;
      } else {
        this.commentViewDown = true;
      }

      if (
        scrollTop <
        this.elementPostions[0].offsetTop +
        this.elementPostions[0].clientHeight -
        5
      ) {
        this.selectedTab = 1;
      } else if (
        scrollTop <
        this.elementPostions[1].offsetTop +
        this.elementPostions[1].clientHeight -
        45
      ) {
        this.selectedTab = 2;
      } else if (
        scrollTop <
        this.elementPostions[2].offsetTop +
        this.elementPostions[2].clientHeight -
        45
      ) {
        this.selectedTab = 3;
      } else {
        this.selectedTab = 4;
      }
    });
  }

  close(){
    this.dialogRef.close("close")
  }
  editDescription(){
     
  }
  downCommentBox() {
    this.subcontainerDiv.nativeElement.scrollTop = Number.MAX_SAFE_INTEGER;

  }


  openDesc(){
    this.show = !this.show;

    if(this.show)  
      this.maticontype = 'keyboard_arrow_up';
    else
    this.maticontype = 'keyboard_arrow_down';

  }
  openFields(){
    this.show1 = !this.show1;

    if(this.show1)  
      this.maticontype1 = 'keyboard_arrow_up';
    else
    this.maticontype1 = 'keyboard_arrow_down';
  }
  openSubissue(){
    this.show2 = !this.show2;

    if(this.show2)  
      this.maticontype2 = 'keyboard_arrow_up';
    else
    this.maticontype2 = 'keyboard_arrow_down';
  }
  openIssueCreatedby(){
    this.show3 = !this.show3;

    if(this.show3)  
      this.maticontype3 = 'keyboard_arrow_up';
    else
    this.maticontype3 = 'keyboard_arrow_down';
  }
  selectTab(tabIndex: number) {
    this.elementPostions = [
      this.infoDiv,
      this.subIssueDiv,
      this.collabratorsDiv,
      this.commentsDiv,
    ].map((element: any) => ({
      offsetTop: element.nativeElement.offsetTop,
      clientHeight: element.nativeElement.clientHeight,
    }));

    this.subcontainerDiv.nativeElement.scrollTop = this.elementPostions[
      tabIndex - 1
    ].offsetTop;
    console.log('Method called');
    
  }
  getCommentMob(event){

    this.downCommentBox();

    
     }


  


}

import { Component, OnInit,ViewChild,ViewChildren, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs'

@Component({
  selector: 'app-issue-detail-meta-body-container-part1',
  templateUrl: './issue-detail-meta-body-container-part1.component.html',
  styleUrls: ['./issue-detail-meta-body-container-part1.component.css']
})
export class IssueDetailMetaBodyContainerPart1Component implements OnInit {

  step:boolean = true;    
  sticky: boolean = false;
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
@ViewChild("comment") commentDiv :any;


  constructor() { }

  ngOnInit(): void {
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
  ngAfterViewInit(){
    
  }

  info(){
    document.getElementById('info').scrollIntoView();

  }

  subissue(){
    document.getElementById('subissue').scrollIntoView();
  }


}

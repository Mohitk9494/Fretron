import { Component, OnInit,EventEmitter,Output,Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit,OnChanges {
  show:boolean = true;
  @Output() commentAction = new EventEmitter<any>();
  @Input() selectedTabFour:number;
  @ViewChild('addCommentAttachment') addCommentAttachment:any;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    if(!this.show){
      this.show = true;
    }
  }
 postCommientMob(){
   if(this.show  ){
     this.show = false;
   }
   this.commentAction.emit('')
 }
 addCommentAttachmentMethod(){
   this.addCommentAttachment.nativeElement.click();
   console.log("atttyttt");
   
 }
}

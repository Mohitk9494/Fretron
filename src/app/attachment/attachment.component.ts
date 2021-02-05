import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {
  @ViewChild('addAttachment') addAttachment:any;

  constructor() { }

  ngOnInit(): void {
  }
  addAttachmentfile(){
    this.addAttachment.nativeElement.click();
    // console.log("addAttachment");
    

  }
}

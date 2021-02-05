import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  inputmethod(){
    document.getElementById('input').oncut = document.getElementById('input').oncopy = document.getElementById('input').onpaste = function(event) {
      alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
      return true;
    };
  }
  
  
}

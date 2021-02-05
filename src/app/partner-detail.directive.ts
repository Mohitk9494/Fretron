import { Directive, EventEmitter, Input,HostListener,Renderer2,ElementRef, Output } from '@angular/core';
import { from } from 'rxjs';

@Directive({
  selector: '[partnerDetail]'
})
export class PartnerDetailDirective {
  @Output("partnerDetail") passEvent = new EventEmitter();
  @Input("UUID") UUID :any;
  tip:any;
  @HostListener("mouseenter")
onMouseEnter(){

  var a  = document.createElement("div");
  a.style.height= '100px';
  var b = document.createTextNode("hi how are you");
  a.appendChild(b);
  a
  console.log("mohit");
  this.tip = this.renderer.createElement("div");
  this.renderer.addClass(this.tip, "tip");
  let text = this.renderer.createText("No permission");
  this.renderer.appendChild(this.tip, text);
  
}
  constructor(private el: ElementRef, private renderer:Renderer2) {
   
   }

}

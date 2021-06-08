import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el:ElementRef) {
    var element = this.el.nativeElement;
        element.style.background = "rgba(68, 197, 176, 0.959)";
        element.style.padding = "20px";
        element.innerText = element.innerText.toUpperCase();
   }

}

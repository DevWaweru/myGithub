import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {


  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.fontFamily = 'Cookie'
    this.elem.nativeElement.style.fontSize = '48px'
  }

}

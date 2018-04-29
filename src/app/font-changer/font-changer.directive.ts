import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {


  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.fontFamily = 'Cookie'
    this.elem.nativeElement.style.fontSize = '48px'
    // console.log(elem)
  }
  @HostListener("mouseenter") onmouseenter(){
    this.fontChange('Caveat')
  }
  @HostListener("mouseleave") onmouseleave(){
    this.fontChange('Cookie')
  }
  private fontChange(action:string){
    this.elem.nativeElement.style.fontFamily = action
    this.elem.nativeElement.style.transitionDuration = '0.5s'
  }
}

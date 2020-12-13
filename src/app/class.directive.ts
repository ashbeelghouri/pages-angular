import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {


  }
  @Input('appClass') set classNames(classObj:any) {
    // if (className === "main-title") {
    //   this.element.nativeElement.style.backgroundColor = '#1976d2';
    //   this.element.nativeElement.style.color = '#FFFFFF';
    //   this.element.nativeElement.style.padding = '10px';
    // }
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}

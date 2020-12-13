import { Directive, ElementRef, Input, AfterViewChecked, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageStabilizer]'
})
export class ImageStabilizerDirective implements AfterViewChecked {
  maxHeight: string;
  constructor(private element: ElementRef) { }


  ngAfterViewChecked() {
    // call our matchHeight function here later
  }

  @HostListener('load', ['$event']) onLoad(event: Event) {
    console.log('loaded');
    this.imageStable({ height: this.maxHeight });
  }


  updateImage(self: any) {
    let imageHeight = self.element.nativeElement.childNodes[0].offsetHeight;
    console.log(self.element.nativeElement.childNodes[0].complete, "is completed");
    self.element.nativeElement.style.overflow = "hidden";
    let marginTopShouldbe = 0;
    let childnodes = self.element.nativeElement.childNodes;
    for (let key in childnodes) {
      if (childnodes[key].tagName == "IMG") {
        console.log(key);
        marginTopShouldbe = ((parseFloat(self.maxHeight) - parseFloat(imageHeight)) / 2 );
        childnodes[key].style.marginTop = marginTopShouldbe + "px";
        childnodes[key].style.marginBottom = marginTopShouldbe + "px";
      } else {
        console.log("Image tag not found");
      }
    }
    self.element.nativeElement.style.height = this.maxHeight + "px";
  }


  @Input('appImageStabilizer') set imageStable(classObj: any) {
    var self = this;
    self.maxHeight = classObj["height"];
    var myCheck = setTimeout(function () {
      if (self.element.nativeElement.childNodes[0].complete) {
        self.updateImage(self);
        clearInterval(myCheck);
      }
    }, 2);
  }
}

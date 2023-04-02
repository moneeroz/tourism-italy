import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.background = '#ECFFDC';
  }
}

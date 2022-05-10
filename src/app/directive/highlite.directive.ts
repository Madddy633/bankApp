import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {

  constructor(private el:ElementRef) {

el.nativeElement.style.backgroundColor="green"

   }

}

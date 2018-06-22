import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHovered]'
})
export class HoveredDirective {
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
      console.log(this.elRef.nativeElement.classList.add('hovered'))
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log(this.elRef.nativeElement.classList.remove('hovered'))
  }


}

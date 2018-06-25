import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHovered]'
})
export class HoveredDirective {
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
      this.elRef.nativeElement.classList.add('hovered');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.elRef.nativeElement.classList.remove('hovered');
  }
}
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';
  private originalColor: string;

  constructor(private el: ElementRef) {
    this.originalColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.originalColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

    private initialColor:string = "#f5f5f5";
    private defaultColor:string = "#009688";

    @Input('pkmnBorderCard') borderColor:string;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        this.el.nativeElement.style.border = 'solid 4px ' + color;
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor);
    }
}
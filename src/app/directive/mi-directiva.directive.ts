import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[MiDirectiva]'
})
export class MiDirectivaDirective implements OnInit{

  constructor(
    public el: ElementRef,
    public render: Renderer
  ) { }

  ngOnInit(){
    this.render.setElementStyle(this.el.nativeElement, 'color', 'red')
  }



}

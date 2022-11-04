import { Directive, HostBinding, Input, Renderer2,ElementRef, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';

@Directive({
  selector: '[appListStyle]'
})
export class ListStyleDirective implements OnInit {

  constructor(private ref:ElementRef, private renderer:Renderer2) {}


 // @HostBinding('style.backgroudColor') bgColor : string;
  @Input('appListStyle') indexList:string = "";

  ngOnInit(): void {
  
    this.setBeginStyle();
  }

  @HostListener('mouseenter') onMouseEnter(eventData : Event): void {
   this.renderer.setStyle(this.ref.nativeElement,'background-color','#D8D8D8')
  }

  @HostListener('mouseleave') onMouseLeave(eventData : Event): void {
    //this.renderer.setStyle(this.ref.nativeElement,'background-color','#ffffff');
    this.setBeginStyle();
  }

  setBeginStyle(){
    var index = Number(this.indexList);
        if(index % 2 == 0){
          this.renderer.setStyle(this.ref.nativeElement,'background-color','#e6e6e6');
        }
        else{
          this.renderer.setStyle(this.ref.nativeElement,'background-color','#ffffff');
        }      
  }
}

import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent{
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const originalElement = this.el.nativeElement.querySelector('.logos-slide');
    const copy = originalElement.cloneNode(true);
    const logosContainer = this.el.nativeElement.querySelector('.logos');
    this.renderer.appendChild(logosContainer, copy);
  }
}

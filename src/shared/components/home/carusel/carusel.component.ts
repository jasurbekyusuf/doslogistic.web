import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent {
  @ViewChild(NzCarouselComponent) carousel!: NzCarouselComponent;

  array = [
    '../../../../assets/images/carusel/Air-New-Zealand.jpg',
    '../../../../assets/images/carusel/air1.jpg',
    '../../../../assets/images/carusel/airplane-windows.jpg',
  ];

  prevSlide() {
    this.carousel.pre();
  }

  nextSlide() {
    this.carousel.next();
  }
}

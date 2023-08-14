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
    '../../../../assets/images/carusel/Air-New-Zealand-Boeing-747-400.webp',
    '../../../../assets/images/carusel/airplane-flying-in-sky-jet-plane-fly-in-clouds-airplanes-travel-and-vacation-aircraft-flight-plane-airplane-trip-to-airport-or-airline-transportation-flat-airplane-illustration-free-vector.jpg',
    '../../../../assets/images/carusel/airplane-windows.jpg',
  ];

  prevSlide() {
    this.carousel.pre();
  }

  nextSlide() {
    this.carousel.next();
  }
}

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
    '../../../assets/images/download (2).jpg',
    '../../../assets/images/download.jpg',
    '../../../assets/images/download (3).jpg',
  ];

  prevSlide() {
    this.carousel.pre();
  }

  nextSlide() {
    this.carousel.next();
  }
}

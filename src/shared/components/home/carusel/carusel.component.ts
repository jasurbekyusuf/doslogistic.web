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
    '../../../../assets/images/contacts/blog-page-img-3 1.png',
    '../../../../assets/images/contacts/blog-page-img-3 1.png',
    '../../../../assets/images/contacts/blog-page-img-3 1.png'
  ];

  prevSlide() {
    this.carousel.pre();
  }

  nextSlide() {
    this.carousel.next();
  }
}

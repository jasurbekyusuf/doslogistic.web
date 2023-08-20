import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @ViewChild(NzCarouselComponent) carousel!: NzCarouselComponent;
  itemsPerSlide = 3;
  carouselSlides: any[] = [];
  carouselItems = [
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem' },
  ];

  constructor() {
    this.generateCarouselSlides();
  }

  generateCarouselSlides() {
    this.carouselSlides = [];
    const totalItems = this.carouselItems.length;

    for (let i = 0; i < totalItems; i += this.itemsPerSlide) {
      const slide = this.carouselItems.slice(i, i + this.itemsPerSlide);
      this.carouselSlides.push(slide);
    }
  }

  prevSlide() {
    this.carousel.pre();
  }

  nextSlide() {
    this.carousel.next();
  }
}

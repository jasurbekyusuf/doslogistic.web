import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  slides = [
    { id: 1, text: "1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" },
    { id: 2, text: "2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" },
    { id: 3, text: "3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" },
    { id: 4, text: "4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" },
    { id: 5, text: "5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" },
    { id: 6, text: "6Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" },
    { id: 6, text: "7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus exercitationem esse maiores culpa omnis corrupti ad, autem vero minus eligendi animi, recusandae officia laudantium ipsam soluta harum nostrum veniam? Lorem" }
  ];
}

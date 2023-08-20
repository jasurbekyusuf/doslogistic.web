import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @ViewChild('container') containerRef!: ElementRef;
  obj: number = 0;
  autoplayInterval: any;
  autoplaySpeed: number = 4000;

  ngAfterViewInit() {
    this.obj = 1365;
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.goNext();
    }, this.autoplaySpeed);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  goNext() {
    this.containerRef.nativeElement.scrollLeft += this.obj;
    if (this.containerRef.nativeElement.scrollLeft >= this.containerRef.nativeElement.scrollWidth - this.obj) {
      this.containerRef.nativeElement.scrollLeft = 0;
    }
  }

  goPrevious() {
    this.containerRef.nativeElement.scrollBy({
      left: -this.obj
    });
    if (this.containerRef.nativeElement.scrollLeft <= 0) {
      this.containerRef.nativeElement.scrollLeft = this.containerRef.nativeElement.scrollWidth - this.obj;
    }
  }

  pauseAutoplay() {
    this.stopAutoplay();
  }
}

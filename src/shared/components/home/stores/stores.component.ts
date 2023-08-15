import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit, OnDestroy {
  stores: string[] = [
    'Store 1',
    'Store 2',
    'Store 3',
    'Store 4',
    'Store 5',
    'Store 6',
    // ... add as many as you have
  ];
  currentIndex = 0;
  visibleStores = 3;
  autoplayInterval: any;

  get visibleItems(): string[] {
    return this.stores.slice(this.currentIndex, this.currentIndex + this.visibleStores);
  }

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextItems();
    }, 3000); // change 3000 (3 seconds) to whatever time you want for each slide transition
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextItems() {
    if (this.currentIndex < (this.stores.length - this.visibleStores)) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // reset back to the start when it reaches the end
    }
  }

  prevItems() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

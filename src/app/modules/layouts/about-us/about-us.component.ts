import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
  isHovered4 = false;
  isHovered5 = false;
  isHovered6 = false;

  toggleHover(cardNumber: number) {
    if (cardNumber === 1) {
      this.isHovered1 = !this.isHovered1;
    } else if (cardNumber === 2) {
      this.isHovered2 = !this.isHovered2;
    } else if (cardNumber === 3) {
      this.isHovered3 = !this.isHovered3;
    } else if (cardNumber === 4) {
      this.isHovered4 = !this.isHovered4;
    } else if (cardNumber === 5) {
      this.isHovered5 = !this.isHovered5;
    } else if (cardNumber === 6) {
      this.isHovered6 = !this.isHovered6;
    }
  }
}

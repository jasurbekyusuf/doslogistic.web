import { Component } from '@angular/core';
import { DropDownAnimation } from './animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [DropDownAnimation]
})
export class NavbarComponent {
  isActive = false;
  isOpen = false;  
  isModalOpen: boolean = false;
  checked = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isActive = this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
    this.isActive = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
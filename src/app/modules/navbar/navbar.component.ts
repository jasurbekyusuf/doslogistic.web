import { Component } from '@angular/core';
import { DropDownAnimation } from './animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [DropDownAnimation]
})
export class NavbarComponent {
  Navbar = NavbarComponent;
  isActive = false;
  isOpen1 = false;
  isOpen: boolean = false;

  menuBtnFunction() {
    this.isOpen1 = !this.isOpen1;
    this.isActive = this.isOpen1;
  }
}
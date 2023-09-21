import { Component, HostBinding, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'open',
        style({
          right: '0',
        })
      ),
      state(
        'closed',
        style({
          right: '-300px',
        })
      ),
      transition('open <=> closed', [animate('0.3s')])
    ]),
  ],
})

export class NavbarComponent {
  isHomePage: boolean = false;
  isActive = false;
  isOpen = false;

  @HostBinding('@slideInOut') get slideInOut() {
    return this.isOpen ? 'open' : 'closed';
  }

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/';
      }
    });
  }

  closeMenu() {
    this.isOpen = false;
    this.isActive = false;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    this.renderer.listen('document', 'click', (event) => {
      if (this.isOpen && !this.el.nativeElement.contains(event.target)) {
        this.closeMenu();
      }
    });
  }
}
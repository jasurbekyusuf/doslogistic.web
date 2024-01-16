import { Component } from '@angular/core';
import {AuthService} from "../../account/auth/service/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent {
  isVisible = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  logOut(){
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}

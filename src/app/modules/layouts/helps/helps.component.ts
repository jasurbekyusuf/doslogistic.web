import { Component } from '@angular/core';
import { DropDownAnimation } from './animation';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss'],
  animations: [DropDownAnimation]
})
export class HelpsComponent {
  isOpen1 = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;
  isOpen5 = false;
  isOpen6 = false;
  isOpen7 = false;
  isOpen8 = false;
  isOpen9 = false;
}

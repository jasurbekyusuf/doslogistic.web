import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-popular-stores',
  templateUrl: './popular-stores.component.html',
  styleUrls: ['./popular-stores.component.scss']
})
export class PopularStoresComponent {
  title = 'Popular Stores' 
  @Input() titles = this.title
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  selectedPage: string = 'uzbekistan';

  showGermany() {
    this.selectedPage = 'germany';
  }

  showPoland() {
    this.selectedPage = 'poland';
  }

  showUzbekistan() {
    this.selectedPage = 'uzbekistan';
  }
}

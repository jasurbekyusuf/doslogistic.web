import { ChangeDetectorRef, Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-address-pol',
  templateUrl: './address-pol.component.html',
  styleUrls: ['./address-pol.component.scss']
})
export class AddressPolComponent {
  constructor(private clipboard: Clipboard, private cdr: ChangeDetectorRef) {}

  showModal: boolean = false;
  copiedText: string = '';

  copyText(text: string) {
    this.clipboard.copy(text);
    this.copiedText = text;

    this.showModal = false;  // Reset the modal state
    setTimeout(() => {
      this.showModal = true;   // Open the modal
    });
  }

  copyAll() {
    const allDetails = `
      someone
      11 Southgate Blvd, D10
      ABC9662
      New Castle
      DE
      19720
      USA
      +1 302 4148567
    `;
    this.clipboard.copy(allDetails);
    this.showModal = false;  // Reset the modal state
    this.cdr.detectChanges();  // Manually trigger change detection
    this.showModal = true;   // Open the modal
  }
}

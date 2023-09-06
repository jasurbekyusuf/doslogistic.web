import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  modalOpen = false;
  currentStep = 0;
  totalSteps = 5;
  selectedCountry: string | null = null;

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.currentStep = 1;
  }

  openModal() {
    this.modalOpen = true;
    this.currentStep = 0;
  }

  closeModal() {
    this.modalOpen = false;
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  get orderSteps(): number[] {
    return Array(this.totalSteps).fill(0).map((_, index) => index + 1);
  }
}

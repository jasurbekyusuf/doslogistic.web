import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  isModalOpen: boolean = false;
  weightValue: number = 0;
  selectedUnit: string = 'kg';
  sliderValue: number = 0;
  checked: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getDeliveryCost(): number {
    if (this.selectedUnit === 'kg') {
      return this.weightValue * 12;
    } else if (this.selectedUnit === 'funt') {
      return this.weightValue * 6;
    } else {
      return 0;
    }
  }

  onSliderChange(event: any): void {
    this.sliderValue = parseFloat(event.target.value);
    this.weightValue = this.sliderValue;
  }

  onWeightInputChange(): void {
    this.sliderValue = parseFloat(this.weightValue.toString());
  }

  getFormattedDeliveryCost(): string {
    const deliveryCost = this.getDeliveryCost();
    return deliveryCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}

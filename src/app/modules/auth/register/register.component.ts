import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isEditMode = false;
  showPassword = false;


  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onPhoneNumberClick(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const countryCode = '+998';
    if (value === '' || value.indexOf(countryCode) !== 0) {
      inputElement.value = countryCode;
      inputElement.setSelectionRange(countryCode.length, countryCode.length);
    }
  }

}

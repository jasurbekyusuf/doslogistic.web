import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {SettingsService} from "./services/settings.service";
import {UserModel} from "../../models/user-model";
declare const intlTelInput: any;

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})

export class PersonalInfoComponent {
  submitted = false;
  userData: UserModel | null | undefined;

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(false),
    passportSeriesAndNumber: new FormControl(''),
    passportJshshir: new FormControl(''),
    birthDate: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private settingService: SettingsService) { }

  ngOnInit() {
    this.getUserID();
    const mobileCodeInput = document.getElementById('mobile_code') as HTMLInputElement;
    if (mobileCodeInput) {
      const iti = intlTelInput(mobileCodeInput, {
        initialCountry: 'uz',
        separateDialCode: true,
      });
      mobileCodeInput.addEventListener('input', () => {
        mobileCodeInput.setCustomValidity('');
      });
    }

    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        gender: [false, [Validators.required, Validators.requiredTrue]],
        phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
        passportSeriesAndNumber: ['', Validators.required, Validators.minLength(9)],
        passportJshshir: ['', Validators.required, Validators.minLength(14)],
      }
    );
  }

  getUserID(){
    this.settingService.getUser().subscribe(response=>{
      this.getUserData(response)
    })
  }

  getUserData(id: any){
    console.log('getUserData ishladi')
    this.settingService.getUserData(id).subscribe(response=>{
      this.userData = response
      console.log(response)
      this.form.patchValue({
        firstName: this.userData?.firstName,
        lastName: this.userData?.lastName,
        birthDate: this.userData?.birthDate,
        email: this.userData?.email,
        acceptTerms: this.userData?.gender,
        phoneNumber: this.userData?.phoneNumber,
        passportSeriesAndNumber: this.userData?.passportSeriesAndNumber,
        passportJshshir: this.userData?.passportJshshir
      });
    })
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}

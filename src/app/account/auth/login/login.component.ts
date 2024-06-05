import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {ResetPasswordService} from "../../../landing/local-services/reset-password/reset-password.service";
import { AuthService } from '../service/register.service';

declare const intlTelInput: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  showPassword: boolean = false;
  submitted = false;

  resetPasswordEmail!: string;
  public isValidEmail!: boolean;
  errors: undefined

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast: NgToastService,
    private resetService: ResetPasswordService) { }

  ngOnInit() {
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
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
              this.router.navigate(['/cabinet'])
        if (this.form.valid) {
          console.log(this.form.value);
          this.authService.login(this.form.value).subscribe({
            next: (res) => {
              this.form.reset();
              this.authService.storeToken(res.token);
              this.toast.success({
                detail: 'SUCCESS',
                summary: res.message,
                duration: 5000,
              });
              this.authService.getUserRole()
              const userRole = this.authService.getUserRole();
              const userId = this.authService.getUserId();

              console.log('User Role:', userRole);
              console.log('User ID:', userId);



            },
            error: (err) => {
              this.toast.error({
                summary: err,
                duration: 7000,
                detail: ''
              });
            },
          });
        } else {
          // ValidateForm.validateAllFormFilds(this.form);
        }
      }

    checkValidEmail(event: string) {
    const value = event;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }

  signOut(){
    this.authService.signOut();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}

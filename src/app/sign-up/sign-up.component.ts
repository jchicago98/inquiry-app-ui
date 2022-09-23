import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { createAccount } from '../models/create.account';
import { InquiryserviceService } from '../services/inquiryservice.service';

import { IUser, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  registrationForm = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    yearBorn: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    reEnteredPassword: new FormControl('', [Validators.required])
  })

  get firstName(): string { return String(this.registrationForm.get('firstName')?.value) }
  get lastName(): string { return String(this.registrationForm.get('lastName')?.value) }
  get yearBorn(): Date { return this.registrationForm.get('yearBorn')?.getRawValue() }
  get email(): string { return String(this.registrationForm.get('email')?.value) }
  get password(): string { return String(this.registrationForm.get('password')?.value) }
  get reEnteredPassword(): string { return String(this.registrationForm.get('reEnteredPassword')?.value) }

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private inquiryService : InquiryserviceService
  ) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  prepareSave(): createAccount {
    return new createAccount(
      null,
      this.firstName,
      this.lastName,
      this.yearBorn,
      this.email,
      this.password
    )
  }

    saveUser():void{
    if(this.registrationForm.valid){
      let user = this.prepareSave();
      this.inquiryService.postUser(user).subscribe()
    }
  }

  public signUp(): void {
    this.loading = true;
    this.authService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.authService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/login']);
    }).catch(() => {
      this.loading = false;
    });
  }

}
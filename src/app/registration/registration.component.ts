import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { createAccount } from '../create.account';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
  get yearBorn(): number { return parseInt(String(this.registrationForm.get('yearBorn')?.value)) }
  get email(): string { return String(this.registrationForm.get('email')?.value) }
  get password(): string { return String(this.registrationForm.get('password')?.value) }
  get reEnteredPassword(): string { return String(this.registrationForm.get('reEnteredPassword')?.value) }


  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  prepareSave(): createAccount {
    return new createAccount(
      null,
      this.firstName,
      this.lastName,
      this.yearBorn,
      this.email,
      this.password,
      this.reEnteredPassword
    )
  }

  saveAccount(): void {
    if (this.registrationForm.valid && this.password == this.reEnteredPassword) {
      let account = this.prepareSave();
      this.router.navigate(['/homepage']);
    }
  }


  goToHomepage() {
    this.router.navigate(['/homepage']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }



}

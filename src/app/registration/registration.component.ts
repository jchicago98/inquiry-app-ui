import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router) { }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {
  }

  goToHomepage() {
    this.router.navigate(['/homepage']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

}

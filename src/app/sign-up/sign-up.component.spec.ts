import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { SignUpComponent } from './sign-up.component';
import { InquiryUser } from '../models/inquiry-user.account';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let user = new InquiryUser(null, "Jorge", "Morin", new Date(7/10/1998), "jorge.morin@cognizant.com");


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should createAccount, passing the user info when the form is valid and the user clicks submit', () => {
    //This is declaring variables to reference the registration html component file and select data test id
    let firstNameTextBox = fixture.nativeElement.querySelector('[data-test-id="firstName"]');
    let lastNameTextBox = fixture.nativeElement.querySelector('[data-test-id="lastName"]');
    let yearBornTextBox = fixture.nativeElement.querySelector('[data-test-id="yearBorn"]');
    let emailTextBox = fixture.nativeElement.querySelector('[data-test-id="email"]');
    let userForm = fixture.nativeElement.querySelector('[data-test-id="userForm"]');
    fixture.detectChanges();
    //This is passing the variables declared earlier and creating instances to test input and validity of form
    firstNameTextBox.value = user.firstName;
    firstNameTextBox.dispatchEvent(new Event('input'));
    lastNameTextBox.value = user.lastName;
    lastNameTextBox.dispatchEvent(new Event('input'));
    yearBornTextBox.value = user.yearBorn;
    yearBornTextBox.dispatchEvent(new Event('input'));
    emailTextBox.value = user.email;
    emailTextBox.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    userForm.dispatchEvent(new Event('submit'));
    
  });

  it('get firstName should return first name value from registration form',()=>{
    let firstNameFunction = fixture.componentInstance.firstName;
    expect (firstNameFunction).toBeFalsy();
  });

  it('get lastName should return last name value from registration form',()=>{
    let lastNameFunction = fixture.componentInstance.lastName;
    expect (lastNameFunction).toBeFalsy();
  });

  it('get yearBorn should return year born value from registration form',()=>{
    let yearBornFunction = fixture.componentInstance.yearBorn;
    expect (yearBornFunction).toBeFalsy();
  });



});

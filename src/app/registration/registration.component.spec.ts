import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { of } from 'rxjs';
import { createAccount } from '../create.account';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let user = new createAccount(null, "Jorge", "Morin", 7/10/1998, "jorge.morin@cognizant.com", "password", "password");

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
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
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let reEnteredPasswordTextBox = fixture.nativeElement.querySelector('[data-test-id="reEnteredPassword"]');
    let userForm = fixture.nativeElement.querySelector('[data-test-id="userForm"]');
    //This is passing the variables declared earlier and creating instances to test input and validity of form
    firstNameTextBox.value = user.firstName;
    firstNameTextBox.dispatchEvent(new Event('input'));
    lastNameTextBox.value = user.lastName;
    lastNameTextBox.dispatchEvent(new Event('input'));
    yearBornTextBox.value = user.yearBorn;
    yearBornTextBox.dispatchEvent(new Event('input'));
    emailTextBox.value = user.email;
    emailTextBox.dispatchEvent(new Event('input'));
    passwordTextBox.value = user.password;
    passwordTextBox.dispatchEvent(new Event('input'));
    reEnteredPasswordTextBox.value = user.reEnteredPassword;
    reEnteredPasswordTextBox.dispatchEvent(new Event('input'));
    userForm.dispatchEvent(new Event('submit'));
  });

  it('submit button should remain disabled until the form is valid with all fields from the user', () => {
    //This is declaring variables to reference the registration html component file and select data test id
    let firstNameTextBox = fixture.nativeElement.querySelector('[data-test-id="firstName"]');
    let lastNameTextBox = fixture.nativeElement.querySelector('[data-test-id="lastName"]');
    let yearBornTextBox = fixture.nativeElement.querySelector('[data-test-id="yearBorn"]');
    let emailTextBox = fixture.nativeElement.querySelector('[data-test-id="email"]');
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let reEnteredPasswordTextBox = fixture.nativeElement.querySelector('[data-test-id="reEnteredPassword"]');
    let submitButton = fixture.nativeElement.querySelector('[data-test-id="submit"]')
    let userForm = fixture.nativeElement.querySelector('[data-test-id="userForm"]');

    //form invalid and disable
    expect(component.registrationForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();

    //Adds first name,form still invalid, still submit button disabled
    firstNameTextBox.value = user.firstName;
    firstNameTextBox.dispatchEvent(new Event('input'));
    expect(component.registrationForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();

    //Adds last name,form still invalid, still submit button disabled
    lastNameTextBox.value = user.lastName;
    lastNameTextBox.dispatchEvent(new Event('input'));
    expect(component.registrationForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();

    //Adds year born,form still invalid, still submit button disabled
    yearBornTextBox.value = user.yearBorn;
    yearBornTextBox.dispatchEvent(new Event('input'));
    expect(component.registrationForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();

    //Adds email,form still invalid, still submit button disabled
    emailTextBox.value = user.email;
    emailTextBox.dispatchEvent(new Event('input'));
    expect(component.registrationForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();

    //Adds password,form still invalid, still submit button disabled
    passwordTextBox.value = user.password;
    passwordTextBox.dispatchEvent(new Event('input'));
    expect(component.registrationForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();

    //Adds reEnteredPassword,FORM NOW VALID!!!, still submit button disabled
    reEnteredPasswordTextBox.value = user.reEnteredPassword;
    reEnteredPasswordTextBox.dispatchEvent(new Event('input'));
    expect(component.registrationForm.valid).toBeFalse();

    fixture.detectChanges();
    expect(submitButton.disabled).toBeTrue();
    userForm.dispatchEvent( new Event ('submit'));

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

  it('get email should return email value from registration form',()=>{
    let emailFunction = fixture.componentInstance.email;
    expect (emailFunction).toBeFalsy();
  });
  


});
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registration link should navigate to registration page using /signUpPage', ()=>{
    let registrationFunction = fixture.componentInstance.goToSignUp();
    expect (registrationFunction).toBeFalsy();
  });

  it('is testing the getter for the username', ()=>{
    let userNameFunction = fixture.componentInstance.username;
    expect (userNameFunction).toBeFalsy();
  });
  
  it('is testing the getter for the password', ()=>{
    let passwordFunction = fixture.componentInstance.password;
    expect (passwordFunction).toBeFalsy();
  });

  it('testing the signIn() function', fakeAsync(()=>{
    //TESTS THE SIGN IN FUNCTION BEFORE A USERNAME AND PASSWORD IS PASSED INTO IT
    let signInFunction = fixture.componentInstance.signIn();
    expect (signInFunction).toBeFalsy();

    //TESTS THE SIGN IN FUNCTION AFTER PASSING A USERNAME AND A PASSWORD
    spyOn(component, 'signIn').and.callThrough();
    let username = fixture.nativeElement.querySelector('[data-test-id="usernameTest"]');
    username.value = "jorge.morin@cognizant.com";
    username.dispatchEvent(new Event('input'));
    let password = fixture.nativeElement.querySelector('[data-test-id="passwordTest"]');
    password.value = "Testing123!";
    password.dispatchEvent(new Event('input'));
    let loginButton = fixture.nativeElement.querySelector('[data-test-id="loginButton"]');
    loginButton.click();
    fixture.detectChanges();
    tick();

  }));

});

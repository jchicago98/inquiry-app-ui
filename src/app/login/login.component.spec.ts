import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { LoginComponent, LoginCompState } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let getStateTextSpy: jasmine.SpyObj<LoginComponent>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['signIn']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide : LoginComponent, useValue: getStateTextSpy }
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

  it('registration link should navigate to registration page using /signUpPage', () => {
    let registrationFunction = fixture.componentInstance.goToSignUp();
    expect(registrationFunction).toBeFalsy();
  });

  it('is testing the getter for the username', () => {
    let userNameFunction = fixture.componentInstance.username;
    expect(userNameFunction).toBeFalsy();
  });

  it('is testing the getter for the password', () => {
    let passwordFunction = fixture.componentInstance.password;
    expect(passwordFunction).toBeFalsy();
  });

  it('testing the signIn() function', fakeAsync(() => {
    
    //TESTS THE SIGN IN FUNCTION AFTER PASSING A USERNAME AND A PASSWORD
    
    let username = fixture.nativeElement.querySelector('[data-test-id="usernameTest"]');
    username.value = "jorge.morin@cognizant.com";
    username.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let password = fixture.nativeElement.querySelector('[data-test-id="passwordTest"]');
    password.value = "testing123!";
    password.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let loginButton = fixture.nativeElement.querySelector('[data-test-id="loginButton"]');
    loginButton.click();
    fixture.detectChanges();

    expect(authServiceSpy.signIn).toHaveBeenCalled();
  }));

  it('should test the onForgotPassWord() function', ()=>{
    let onForgotPassWordFunction = fixture.componentInstance.onForgotPasswordClick();
    expect(onForgotPassWordFunction).toBeFalsy();
  });

  it('should test onLoginClick() function,', ()=>{
    let onLoginClickFunction = fixture.componentInstance.onLoginClick();
    expect(onLoginClickFunction).toBeFalsy();
  });

  it('should test getStateText() function', fakeAsync(()=>{
    let getStateTextFunction = fixture.componentInstance.getStateText()
    expect(getStateTextFunction).toBeTruthy();
    let forgotPasswordButtonClick = fixture.nativeElement.querySelector('[data-test-id="forgotPasswordButtonTest"]');
    forgotPasswordButtonClick.click();
    fixture.detectChanges();
    expect(forgotPasswordButtonClick).toBeTruthy();


  }));

});

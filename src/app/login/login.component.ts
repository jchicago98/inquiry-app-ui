import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  state = LoginCompState.LOGIN;
  loading: boolean = false;
  loginError: boolean = false;
  loginErrorMessage: string = "You messed up LOL!";
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  }); 
  hide:boolean=true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn();
    this.router.navigate(['']);
  }


  goToRegistration() {
    this.router.navigate(['/registration']);
  }

  onForgotPasswordClick() {
    this.state = LoginCompState.FORGOT_PASSWORD;
  }

  onLoginClick() {
    this.state = LoginCompState.LOGIN;
  }

  isLoginState() {
    return this.state == LoginCompState.LOGIN;
  }

  isForgotPasswordState() {
    return this.state == LoginCompState.FORGOT_PASSWORD;
  }

  getStateText() {
    switch (this.state) {
      case LoginCompState.LOGIN:
        return "Login";
      case LoginCompState.FORGOT_PASSWORD:
        return "Forgot Password";
    }
  }

}

export enum LoginCompState {
  LOGIN,
  FORGOT_PASSWORD
}

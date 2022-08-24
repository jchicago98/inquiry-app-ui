import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  state = LoginCompState.LOGIN;

  constructor(private router: Router) { }

  ngOnInit(): void {
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

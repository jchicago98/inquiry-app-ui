import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, IUser } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  state = LoginCompState.LOGIN;
  user: IUser;
  loading: boolean;
  loginError: boolean = false;
  loginErrorMessage: string = "";
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  }); 
  hide:boolean=true;

  get username():string{return this.loginForm.get('username')?.value}
  get password():string{return this.loginForm.get('password')?.value}

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
      this.loading = false;
      this.user = {} as IUser;
  }

  signIn(): void {
    this.loading = true;
    this.user.email = this.username;
    this.user.password = this.password;

    this.authService.signIn(this.user).then(
      () => this.router.navigate([''])
    ).catch( error => {
      this.loading = false;
      this.loginError = true;
      this.loginErrorMessage = error.toString();
    });
  }

  ngOnInit(): void {
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
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
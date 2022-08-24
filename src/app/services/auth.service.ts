import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated: Observable<boolean> = this.authSubject.asObservable();

  constructor() { }

  signIn() {
    this.authSubject.next(true);
  }

  signOut() {
    this.authSubject.next(false);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  signIn() : void {
    this.authSubject.next(true);
  }

  signOut() : void {
    this.authSubject.next(false);
  }

  isAuthenticated():Observable<boolean> {
    return this.authSubject.asObservable();
  }
}

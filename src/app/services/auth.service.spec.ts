import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { IUser } from '../services/auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let authServiceSpy: jasmine.SpyObj<AuthService>;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have auth behavior subject that publishes false initially', () => {
    service.isAuthenticated().subscribe(
      res => expect(res).toBeFalse()
    )
  });

/*
  it('should have a sign in method that broadcasts true from isAuthenticated', () => {
    service.signIn();
    service.isAuthenticated().subscribe(
      res => expect(res).toBeTrue()
    )
  });
 */
  it('should have a signOut method that broadcasts false', () => {
    service.signOut();
    service.isAuthenticated().subscribe(
      res => expect(res).toBeFalse()
    );
  });
 


});


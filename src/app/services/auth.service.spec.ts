import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { IUser } from '../services/auth.service';
import { of } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';


describe('AuthService', () => {
  let service: AuthService;
  let routerSpy: jasmine.SpyObj<Router>;
  let user: IUser;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have auth BehaviorSubject that publishes "false" initially', () => {
    service.isAuthenticated().subscribe(
      res => expect(res).toBeFalse()
    )
  });

  /* 
    it('should have a signIn method that broadcasts true from isAuthenticated and a logOut method that broadcasts false', () => {
      //service.signIn.apply;
      service.isAuthenticated().subscribe(
        res => {
          expect(res).toBeTrue()
  
        }
      );
    });
  */
  it('should have a signOut method that broadcasts false', () => {
    // service.signIn();
    service.signOut();
    service.isAuthenticated().subscribe(
      res => expect(res).toBeFalse()
    );
  });

  it(`should have a canActivate method that returns false if user is not logged 
      in and should navigate back to home`, () => {
    service.canActivate().subscribe(
      res => {
        expect(res).toBeFalse();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
      }
    );

  });

  /* 
    it('should have a canActivate method that returns true if the user is logged in', () => {
      service.signIn();
      service.canActivate().subscribe(
        res => expect(res).toBeTrue()
      );
    })
  */

});


import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have auth behavior subject that publishes false initially',()=>{
    service.isAuthenticated.subscribe; {
      res => expect(res).toBeFalse()
    }
  });

  it('should have a sign in method that broadcasts true from isAuthenticated', ()=>{
    service.signIn();
    service.isAuthenticated.subscribe;{
      res => expect(res).toBeTrue()
    }

    service.signOut();
  });

});

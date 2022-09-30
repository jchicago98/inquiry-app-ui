import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [AppRoutingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('homepage and login buttons should not navigate to their respective pages', ()=>{
    let homepageFunction = fixture.componentInstance.goToHomepage();
    expect (homepageFunction).toBeFalsy();
  });

  it('Tests the goToMessage() function',()=>{
    let goToMessageFunction = fixture.componentInstance.goToMessages();
    expect(goToMessageFunction).toBeFalsy();
  });

  it('Tests the goToAccount() function',()=>{
    let goToAccountFunction = fixture.componentInstance.goToAccount();
    expect(goToAccountFunction).toBeFalsy();
  });

  it('Tests the goToPosts() function',()=>{
    let goToPostsFunction = fixture.componentInstance.goToPost();
    expect(goToPostsFunction).toBeFalsy();
  });

  it('Tests the signOut() function',()=>{
    let signOutFunction = fixture.componentInstance.signOut();
    expect(signOutFunction).toBeFalsy();
  })

});

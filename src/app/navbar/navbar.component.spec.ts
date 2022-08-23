import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

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

    let loginFunction = fixture.componentInstance.goToLogin();
    expect (loginFunction).toBeFalsy();
  });

});

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated?: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  signOut(): void {
    this.authService.signOut();
  }

  goToHomepage() {
    this.router.navigate(['/homepage']);
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(
      res => this.isAuthenticated = res
    )
  }

}

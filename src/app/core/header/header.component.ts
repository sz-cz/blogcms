import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
  constructor(public router : Router, private authService : AuthService) { }

  checkUserView() {
    if (this.router.url.substring(0,6) == '/admin' || this.router.url == '/login') return false 
    else return true
  };
  
  logout = () => this.authService.logout();
}
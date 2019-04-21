import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  constructor(private authService : AuthService, private router : Router, private snackBar : MatSnackBar) { }

  login() {
    this.authService.login(this.credentials)
      .then(user => this.router.navigate(['/admin']))
      .catch(error => this.snackBar.open(error.message));
  }

  register() {
    this.authService.register(this.credentials)
      .then(user => this.snackBar.open('Użytkownik utworzony pomyślnie'))
      .catch(error => this.snackBar.open(error.message))
  }

}

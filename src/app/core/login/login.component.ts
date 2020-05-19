import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Credentials } from 'src/app/shared/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  credentials : Credentials = {
    email: '',
    password: ''
  };

  constructor(private authService : AuthService) { }

  login = () : Promise<boolean | MatSnackBarRef<SimpleSnackBar>> => this.authService.login(this.credentials);

  register = () : Promise<boolean | MatSnackBarRef<SimpleSnackBar>> => this.authService.register(this.credentials);
}

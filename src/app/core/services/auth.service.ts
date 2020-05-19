import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';
import { Router } from '@angular/router';
import { UiService } from './ui.service';
import { Credentials } from 'src/app/shared/models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData : UserInfo;

  constructor(
    private fireAuth : AngularFireAuth,
    private router : Router,
    private uiService : UiService) { }

  login = (credentials : Credentials) =>
    this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => this.userData = user.user)
      .then(() => this.router.navigate(['/admin']))
      .then(() => this.uiService.openSnackBar('success', 'Zalogowano pomyślnie'))
      .catch(error => this.uiService.openSnackBar('failure', `Błąd: ${error.message}`));

  register = (credentials : Credentials) =>
    this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => this.uiService.openSnackBar('success', 'Użytkownik utworzony pomyślnie'))
      .catch(error => this.uiService.openSnackBar('failure', `Błąd: ${error.message}`));

  logout = () : Promise<boolean> => this.fireAuth.auth.signOut()
      .then(() => this.userData = undefined)
      .then(() => this.uiService.openSnackBar('success', 'Wylogowano pomyślnie'))
      .then(() => this.router.navigate(['']));

  isLoggedIn = () : UserInfo => this.userData;

  get user() {
    return this.userData
  }
}

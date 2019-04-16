import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData : UserInfo;

  constructor(private fireAuth : AngularFireAuth) { }

  login(credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => this.userData = user.user)
  }

  register(credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
  }

  logout() {
    this.userData = undefined;
    return this.fireAuth.auth.signOut();
  }

  isLoggedIn() {
    return this.userData;
  }

  get user() {
    return this.userData;
  }
}

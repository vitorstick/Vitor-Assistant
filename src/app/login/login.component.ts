import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  private currentUser: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
  ) {



    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.displayName;
    } else {
      return '';
    }
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  signInWithGoogle() {

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    console.log("user", this.currentUser.displayName)
    this.afAuth.auth.signOut();
  }


}

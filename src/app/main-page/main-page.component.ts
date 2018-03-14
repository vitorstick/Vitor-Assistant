import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ServicesService } from '../core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  private currentUser: firebase.User;

  constructor(private services: ServicesService,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase) {

    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  Send(desc: string) {
    const currTime = new Date();
    const dateToSend = currTime.getTime();
    console.log('time - user', dateToSend);
    this.items.push({
      message: desc,
      user: this.currentUser.displayName,
      userId: this.currentUser.uid,
      userPhoto: this.currentUser.photoURL,
      timestamp: dateToSend
    });
    this.msgVal = '';
  }

  deleteMsg(item) {
    console.log(item.$key);
    console.log(item);
    this.items.remove(item.$key).then(_ => console.log('item deleted!'));
  }

}

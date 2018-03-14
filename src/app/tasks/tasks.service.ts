import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
// import { AuthService } from '../auth';
// import { firebase } from '../firebase';
import { Task, ITask } from './model/task';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class TasksService {

    items: FirebaseListObservable<any[]>;

    private currentUser: firebase.User;
    private user: Observable<firebase.User>;

    constructor(
        public afAuth: AngularFireAuth,
        public af: AngularFireDatabase
    ) {
        this.items = af.list('/todoList', {
            query: {
                limitToLast: 50
            }
        });

        afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    }

    createItem(todoValue: string) {
        console.log(this.currentUser, 'currentuser');
        if (this.currentUser) {
            this.items.push(new Task(todoValue, this.currentUser.uid));
        } else {
            this.items.push(new Task(todoValue));
        }
        todoValue = '';
    }

    removeTask(task: ITask): firebase.Promise<any> {
        return this.items.remove(task.$key);
    }

    updateTask(task: ITask): firebase.Promise<any> {
        return this.items.update(task.$key, task);
    }
}

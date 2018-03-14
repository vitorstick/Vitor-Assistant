import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ServicesService } from '../../core';
import { TasksService } from '../tasks.service';

import { Task, ITask } from '../model/task';

import { Store } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET, 
  CREATE, EDIT, REMOVE, 
  actionAddTodo, actionRemoveTodo, actionEditTodo } from '../reducers/counter';

interface AppState {
  counter: number
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  counter: Observable<number>;
  itemsRed: Observable<number>;

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  todoValue: string = '';
  showInactive: boolean = true;

  private currentUser: firebase.User;

  constructor(
    private services: ServicesService,
    private taskServices: TasksService,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private store: Store<any>
  ) {
    this.items = af.list('/todoList', {
      query: {
        limitToLast: 50
      }
    });

    this.counter = store.select('counter');

    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  createItem() {
    this.taskServices.createItem(this.todoValue);
    this.todoValue = '';
  }

  createTask(event: any) {
    this.store.dispatch(actionAddTodo(event));
    this.taskServices.createItem(event);
  }

  removeTask(item: ITask) {
    this.taskServices.removeTask(item);
  }

  changeStatus(event: any) {
    this.taskServices.updateTask(event);
  }

  public toogleInactive(option: string): void {
    if (option == 'all') {
      this.showInactive = true;
    }
    if (option == 'active') {
      this.showInactive = false;
    }
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
    this.store.dispatch({ type: REMOVE });
  }

  reset() {
    this.store.dispatch({ type: RESET });
    this.store.dispatch({ type: EDIT });
  }

}

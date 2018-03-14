import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/map";

import { TasksService } from '../tasks.service';
import { ITask, Task } from '../model/task';

@Injectable()
export class TodosEffects {
    constructor(
        private actions$: Actions<any>,
        private tasksService: TasksService
    ) { }

    @Effect({ dispatch: false })
    actionAddTodo = this.actions$.ofType('CREATE')
        .map(toPayload)
        .do(actions => {
            console.log("this was an add effect", actions);
            this.tasksService.createItem(actions);
        });

    @Effect({ dispatch: false })
    actionRemoveTodo = this.actions$.ofType('REMOVE')
        .do(actions => {
            console.log("this was a remove effect", actions);
            this.tasksService.removeTask(actions.payload);
        });

    @Effect({ dispatch: false })
    actionEditTodo = this.actions$.ofType('EDIT')
        .do(actions => {
            console.log("this was a edit effect", actions);
            this.tasksService.updateTask(actions.payload);
        });
}
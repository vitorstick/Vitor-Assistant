import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET, 
  CREATE, EDIT, REMOVE, 
  actionAddTodo, actionRemoveTodo, actionEditTodo } from '../reducers/counter';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'new-task',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.less']
})
export class NewTaskComponent {
    @Output() createTask = new EventEmitter(false);

    constructor(private store: Store<any>) {

    }

    title = '';

    clear(): void {
        this.title = '';
    }

    submit(): void {
        const title: string = this.title.trim();
        if (title.length) {
            // this.createTask.emit(title);
            this.store.dispatch(actionAddTodo(title));
        }
        this.clear();
    }
}
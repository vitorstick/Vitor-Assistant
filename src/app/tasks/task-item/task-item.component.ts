import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask, Task } from '../model/';

import { Store } from '@ngrx/store';

import {
    INCREMENT, DECREMENT, RESET,
    CREATE, EDIT, REMOVE,
    actionAddTodo, actionRemoveTodo, actionEditTodo
} from '../reducers/counter';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-task-item',
    styleUrls: ['./task-item.component.less'],
    templateUrl: './task-item.component.html',
})

export class TaskItemComponent {
    @Input() task: Task;
    @Output() remove = new EventEmitter(false);
    @Output() update = new EventEmitter(false);


    editing = false;
    taskText = '';

    constructor(private store: Store<any>) {
    }

    toggleStatus(task: Task): void {
        task.completed = !task.completed;
        this.update.emit(task);
    }

    editTask() {
        this.editing = true;
        this.taskText = this.task.value;
    }

    stopEditing(): void {
        this.editing = false;
    }

    saveTitle() {
        if (this.editing) {
            this.task.value = this.taskText;
            this.store.dispatch(actionEditTodo(this.task));
            // this.update.emit(this.task);
            this.editing = false;
        }
    }

    removeTask(task: Task) {
        this.task.value = this.taskText;
        this.store.dispatch(actionRemoveTodo(task));
        // this.remove.emit(this.task);
    }

}

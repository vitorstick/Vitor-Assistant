import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ActiveTaskPipe } from './active-task.pipe';

import { TasksRoutesModule } from './tasks.routes';
import { TasksService } from './tasks.service';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter';
import { todosReducer } from './reducers/todos-reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './reducers/todos.effects';

@NgModule({
    declarations: [
        TodoListComponent,
        NewTaskComponent,
        TaskItemComponent,
        ActiveTaskPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutesModule,
        StoreModule.forRoot({
            counter: counterReducer
        }),
        EffectsModule.forRoot([TodosEffects])
    ],
    providers: [
        TasksService
    ]
})
export class TasksModule { }
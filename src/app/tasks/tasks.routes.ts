import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { TodoListComponent } from './todo-list/todo-list.component';

// guards
// import { RequireAuthGuard } from '../auth';


export const TasksRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'tasks',
    component: TodoListComponent
    // ,
    // canActivate: [RequireAuthGuard]
  }
]);
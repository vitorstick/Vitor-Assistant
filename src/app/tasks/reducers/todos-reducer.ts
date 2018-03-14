import { Action } from '@ngrx/store';
import { ITask, Task } from '../model/task';

export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';
export const CREATE = 'CREATE';

export const actionAddTodo = (item: Task) =>
  ({ type: CREATE, payload: item });

export function todosReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case EDIT:
    		console.log("todos_reducer.ts");
			return state + 1;

		case REMOVE:
			return state - 1;

		case CREATE:
			console.log("todo reducer create");
			return 0;

		default:
			return state;
	}
}

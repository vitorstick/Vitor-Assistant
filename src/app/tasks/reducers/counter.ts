import { Action } from '@ngrx/store';
import { ITask, Task } from '../model/task';

export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';
export const CREATE = 'CREATE';

export const actionAddTodo = (item: string) =>
    ({ type: CREATE, payload: item });

export const actionRemoveTodo = (item: ITask) =>
    ({ type: REMOVE, payload: item });

export const actionEditTodo = (item: ITask) =>
    ({ type: EDIT, payload: item });

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        case EDIT:
            return state + 1;

        case REMOVE:
            return state - 1;

        case CREATE:
            return state + 1;;

        default:
            return state;
    }
}
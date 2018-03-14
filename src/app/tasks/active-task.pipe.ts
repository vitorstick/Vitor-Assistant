import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './model/';

@Pipe({
	name: 'activeTask'
})
export class ActiveTaskPipe implements PipeTransform {

	public transform(tasks: Task[], includeInactive: boolean) {
		if (includeInactive == true) {
			return tasks;
		} else {
            if(tasks.length>0){
			    return tasks.filter(task => !task.completed);
            }
            return tasks;
		}
	}
}
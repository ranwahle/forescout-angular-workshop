import { Injectable } from '@angular/core';
import {Task} from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Task[] {
    const tasks = [];
    for (let i = 0; i < 10; i++) {
      tasks.push({title: `Task ${i + 1} title`, done: false, description: `Task ${i + 1} Description`});
    }
    return tasks;
  }
}

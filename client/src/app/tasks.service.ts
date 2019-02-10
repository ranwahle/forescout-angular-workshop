import { Injectable } from '@angular/core';
import {Task} from './model/task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
   return this.http.get<Task[]>('/api/tasks');
  }

  addTask(task: Task) {
      return this.http.post('/api/tasks', task);
  }
}

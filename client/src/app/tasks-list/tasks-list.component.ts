import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../model/task';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  tasks:  Observable<Task[]>;

  constructor(private tasksService: TasksService) {


  }

  ngOnInit(): void {
    this.initTasks();
  }

  initTasks() {
    this.tasks = this.tasksService.getTasks();
  }

}

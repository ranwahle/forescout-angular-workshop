import {Component} from '@angular/core';
import {Task} from './model/task';
import {TasksService} from './tasks.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks:  Observable<Task[]>;
  title = 'forescout-angular-workshop';

  constructor(private tasksService: TasksService) {
    this.initTasks();

  }

  initTasks() {
    this.tasks = this.tasksService.getTasks();
  }
}

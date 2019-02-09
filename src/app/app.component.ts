import {Component} from '@angular/core';
import {Task} from './model/task';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[] = [];
  title = 'forescout-angular-workshop';

  constructor(private tasksService: TasksService) {
    this.initTasks();

  }

  initTasks() {
    this.tasks = this.tasksService.getTasks();
  }
}

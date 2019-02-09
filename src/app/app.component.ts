import {Component} from '@angular/core';
import {Task} from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[] = [];
  title = 'forescout-angular-workshop';

  constructor() {
    this.initTasks();

  }

  initTasks() {
    for (let i = 0; i < 10; i++) {
      this.tasks.push({title: `Task ${i + 1} title`, done: false, description: `Task ${i + 1} Description`});
    }
  }
}

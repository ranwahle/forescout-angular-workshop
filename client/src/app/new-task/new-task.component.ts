import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {TasksService} from '../tasks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  task: Task;

  constructor(private tasksService: TasksService, private router: Router) {
  }

  ngOnInit() {
    this.task = {title: '', description: '', done: false}
  }

  submitForm() {
    this.tasksService.addTask(this.task).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}

import {Routes} from '@angular/router';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {NewTaskComponent} from './new-task/new-task.component';

export const routes: Routes = [{
  path: '', redirectTo: '/taskslist', pathMatch: 'full'
}, {
  path: 'taskslist', component: TasksListComponent
}, {
  path: 'newtask', component: NewTaskComponent
}];

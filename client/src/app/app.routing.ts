import {Routes} from '@angular/router';
import {TasksListComponent} from './tasks-list/tasks-list.component';

export const routes: Routes = [{
  path: '', redirectTo: '/tasksList', pathMatch: 'full'
}, {
  path: 'tasksList', component: TasksListComponent
}];

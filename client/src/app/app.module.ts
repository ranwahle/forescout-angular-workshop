import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import { HeaderComponent } from './header/header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        TasksListComponent,
        HeaderComponent,
        NewTaskComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

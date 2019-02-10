import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        TasksListComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

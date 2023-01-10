import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './feature/todo/todos-list/todos-list.component';
import { TodoDetailsComponent } from './feature/todo/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

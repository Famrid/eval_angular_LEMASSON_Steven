import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoComponent } from './add-todo.component';


@NgModule({
  declarations: [
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    AddTodoRoutingModule
  ]
})
export class AddTodoModule { }

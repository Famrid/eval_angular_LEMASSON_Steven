import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo.component';

const routes: Routes = [{ path: '', component: AddTodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTodoRoutingModule { }

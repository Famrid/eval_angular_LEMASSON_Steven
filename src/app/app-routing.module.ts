import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './feature/todo/todos-list/todos-list.component';

const routes: Routes = [
  { path: '', component: TodosListComponent },
  { path: 'add-todo', loadChildren: () => import('./feature/add-todo/add-todo.module').then(m => m.AddTodoModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

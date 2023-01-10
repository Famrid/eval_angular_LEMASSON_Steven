import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'add-todo', loadChildren: () => import('./feature/add-todo/add-todo.module').then(m => m.AddTodoModule) }, { path: 'add-todo', loadChildren: () => import('./feature/add-todo/add-todo.module').then(m => m.AddTodoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

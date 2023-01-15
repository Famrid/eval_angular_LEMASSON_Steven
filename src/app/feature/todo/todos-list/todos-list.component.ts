import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/app/model/todo';
import { Observable, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit{

  todosArray!: Todo[];
  pageIndex!: number;
  numberOfPages!: number;


  constructor(private todoService: TodoService, private _snackbar: MatSnackBar) {
    this.todosArray = [];
  }

  ngOnInit(): void {
    this.pageIndex = 1;
    this.getTodos().subscribe({
      next: (data: Todo[]) => {
        this.todosArray = data;
        this.numberOfPages = Math.ceil(this.todosArray.length / 5);
        this.openSnackBar('Todos fetched', 'CLOSE');
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar(error.status + " : " + error.message, 'CLOSE')
      }
    });
    
  }
  
  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

  getTodos(): Observable<Todo[]> {
    return this.todoService.getTodos();
  }

  getStartPage(): number {
    return (this.pageIndex - 1) * 5;
  }

  getEndPage(): number {
    return ((this.pageIndex - 1) * 5) + 5;
  }

  previousButtonHandler(): void {
    this.pageIndex -= 1;
    this.numberOfPages = Math.ceil(this.todosArray.length / 5)
  }

  nextButtonHandler(): void {
    this.pageIndex += 1;
    this.numberOfPages = Math.ceil(this.todosArray.length / 5)
  }

  removeTodoEventHandler($event: Todo) {
    this.todosArray = [...this.todosArray].filter((element: Todo) => element.id !== $event.id);
    }
}

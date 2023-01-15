import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from '../todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Output()
  removeTodoEvent: EventEmitter<Todo> = new EventEmitter();

  @Input()
  data!: Todo;

  constructor(private todosService: TodoService, private _snackbar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

  removeTodo() {
    this.todosService.removeTodo(this.data.id).subscribe({
      next: x => {
        this.removeTodoEvent.emit(this.data);
        this.openSnackBar('Todo id: ' + this.data.id + ' with title ' + this.data.title + ' removed', 'CLOSE');
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar(error.status + " : " + error.message, 'CLOSE');
      }
    
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Todo } from 'src/app/model/todo';
import { Title } from 'src/app/model/title';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  todoFormGroup!: FormGroup;

  constructor(private todosService: TodoService, private _snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.todoFormGroup = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(2)])
    })
  }

  get title() {
    return this.todoFormGroup.get('title');
  }

  addTodo() {
    const payload: Title = {"title": this.title?.value}
    this.todosService.addTodo(payload).subscribe({
      next: (data: Todo) => {
        this.openSnackBar('Todo with title ' + this.title?.value + 'added to database', 'CLOSE')
        this.title?.setValue("");
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar(error.status + " : " + error.message, 'CLOSE');
      }
    }); 
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }
}

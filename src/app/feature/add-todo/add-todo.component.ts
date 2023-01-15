import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Todo } from 'src/app/model/todo';
import { Title } from 'src/app/model/title';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  todoFormGroup!: FormGroup;

  constructor(private todosService: TodoService) {}

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
    this.todosService.addTodo(payload).subscribe((data: Todo) => console.log(data));
    this.title?.setValue("");
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/app/model/todo';
import { Observable, map } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit{

  todosArray!: Todo[];


  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos().subscribe((data: Todo[]) => this.todosArray = data)
  }

  getTodos() {
    return this.todoService.getTodos();
  }

  removeTodoEventHandler($event: Todo) {
    this.todosArray = [...this.todosArray].filter((element: Todo) => element.id !== $event.id);
    }
}

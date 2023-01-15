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
  pageIndex!: number;
  numberOfPages!: number;


  constructor(private todoService: TodoService) {
    this.todosArray = [];
  }

  ngOnInit(): void {
    this.pageIndex = 1;
    this.getTodos().subscribe((data: Todo[]) => {
      this.todosArray = data;
      this.numberOfPages = Math.ceil(this.todosArray.length / 5);
      console.log(this.numberOfPages);
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

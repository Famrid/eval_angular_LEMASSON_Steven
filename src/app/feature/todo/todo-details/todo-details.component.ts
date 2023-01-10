import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from '../todo.service';

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

  constructor(private todosService: TodoService) {}

  removeTodo() {
    this.todosService.removeTodo(this.data.id).subscribe(x => this.removeTodoEvent.emit(this.data));
  }
}

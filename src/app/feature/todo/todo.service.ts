import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'
import { Todo } from 'src/app/model/todo';
import { Title } from 'src/app/model/title';

@Injectable({
  providedIn: 'root'
})
export class TodoService{
  public API_URL: string;

  constructor(private http: HttpClient) { 
    this.API_URL = "http://localhost:3000/"
  }

  getTodosResponse(): Observable<HttpResponse<Todo[]>> {
    return this.http.get<Todo[]>(this.API_URL + "todos", { observe: 'response', responseType: 'json'});
  }
//Essai en récupérant l'http response
  getTodos(): Observable<Todo[]> {
    return this.getTodosResponse().pipe(
        map((response: HttpResponse<Todo[]>) => {
          return response.body!.map((todo: Todo) => {
            return new Todo(todo.id, todo.title, todo.completed)
          })
        })
      )
  }

  addTodo(todo: Title): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL + "todo", todo);
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + "todo/" + id);
  }
}

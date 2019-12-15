import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoServiceService {
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
  }

  postTodo(obj: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      "https://jsonplaceholder.typicode.com/todos",
      obj
    );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log("TODO", todo);

    return this.http.post<Todo>(
      `https://jsonplaceholder.typicode.com/todos`,
      todo
    );
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}

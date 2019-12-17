import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { Observable, of, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoServiceService {
  private todos: Todo[]
  constructor(private http: HttpClient) { }

  getTodoObservable(): Observable<Todo[]> {
    return of(this.todos)
  }

  getTodos(): Subscription {
    return this.http.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    ).subscribe(todos => {
      this.todos = todos
      console.log("GET", this.todos);
    })
  }

  updateTodo(todo: Todo): Subscription {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    ).subscribe((updatedTodo) => {
      console.log("UPDATE", updatedTodo);
      this.todos.some(t => {
        if (t.id === todo.id) {
          return t.completed = updatedTodo.completed
        }
      });
    })
  }

  addTodo(todo: Todo): Subscription {
    return this.http.post<Todo>(
      `https://jsonplaceholder.typicode.com/todos`,
      todo
    ).subscribe(todo => {
      console.log("ADD", todo);
      return this.todos.push(todo)
    })
  }

  deleteTodo(id: string): Subscription {
    return this.http.delete<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    ).subscribe(() => {
      console.log("REMOVE", this.todos[id]);
      const removeIndex = this.todos.map(function (item) { return item.id; }).indexOf(Number(id));
      return this.todos.splice(removeIndex, 1);
    })
  }
}

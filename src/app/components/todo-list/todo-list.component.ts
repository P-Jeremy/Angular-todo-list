import { Component, OnInit } from "@angular/core";
import { TodoServiceService } from "./../../services/todo-service.service";
import { Todo } from "src/app/models/todo";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  /** Array of todos */
  todoList: Todo[];

  /** Title */
  title: string = "Todo list";

  /** Subject that will handle the unsubscribe */
  private $destroy = new Subject<void>();

  /** The todoService is injected in the constructor */
  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.todoService
      /** When can access the methods and values of the service */
      .getTodos()
      /** Will cancel subscription when a new value is emitted for the $destroy Subject */
      .pipe(takeUntil(this.$destroy))
      /** Can be compared to .then() on promises */
      .subscribe(todos => (this.todoList = todos));
  }

  OnDestroy() {
    /** Emit a new value onDestroy */
    this.$destroy.next();
  }

  onToggle(todo: Todo) {
    return this.todoService
      .updateTodo(todo)
      /** Will cancel subscription when a new value is emitted for the $destroy Subject */
      .pipe(takeUntil(this.$destroy))
      /** Can be compared to .then() on promises */
      .subscribe(todo => (console.log("UPDATE OK on :", todo)));
  }
}

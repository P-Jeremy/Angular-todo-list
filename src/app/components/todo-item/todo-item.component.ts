import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  /** Value comming from parent mapping */
  @Input() todo: Todo;
  @Output() onToggle: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  /**
   * Allows to change the completed property on todo item
   * @param todo
   */
  onToggleClick(todo: Todo) {
    todo.completed = !todo.completed;
    return this.onToggle.emit(todo);
  }
}

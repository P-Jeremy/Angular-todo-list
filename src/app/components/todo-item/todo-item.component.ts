import { Component, OnInit, Input, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { EventEmitter } from "events";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  /** Value comming from parent mapping */
  @Input() todo: Todo;
  @Output() toggle: EventEmitter = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  /**
   * Allows to change the completed property on todo item
   * @param todo
   */
  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    return this.toggle.emit(null);
  }
}

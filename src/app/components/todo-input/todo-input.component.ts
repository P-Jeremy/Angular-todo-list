import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todoInput: FormGroup
  submitted: Boolean = false;
  constructor(private formbuilder: FormBuilder, private todoService: TodoServiceService) {
  }

  ngOnInit() {
    this.todoInput = this.formbuilder.group({
      todo: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(e: string) {
    this.submitted = true;
    if (this.todoInput.invalid) {
      return;
    }
    const newTodo: Todo = {
      title: e,
      completed: false,
    }
    this.todoService.addTodo(newTodo)
    this.todoInput.reset()
  }

}

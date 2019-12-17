import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './services/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toDoAngular';

  constructor(private todoService: TodoServiceService) {
  }

  ngOnInit() {
  }

}

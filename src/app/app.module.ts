import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {
  MatListModule,
  MatToolbarModule,
  MatIconModule
} from "@angular/material";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todoListArray: any[];
  constructor(private todoService: TodoService) {
    this.todoListArray = new Array();
  }

  ngOnInit() {
    this.todoListArray = this.todoService.getTodoItems();
  }

  addItem(itemTitle) {
    this.todoService.addTodoItem(itemTitle.value);
    itemTitle.value = null;
  }

  updateTodoStatus(item) {
    this.todoService.updateTodoStatus(item);
  }

  deleteTodoItem(item) {
    this.todoService.deleteTodoItem(item);
  }
}

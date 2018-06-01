import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Array<any>;
  constructor() {
    this.todoList = new Array();
  }

  addTodoItem(todoItem) {
    let count = this.todoList.length;
    this.todoList.push({ id: count, todoItem, completed: false });
    this.sortTodoList();
  }

  getTodoItems() {
    this.todoList.sort((a, b) => {
      return a.completed - b.completed;
    });
    return this.todoList;
  }

  updateTodoStatus(item) {
    item.completed = item.completed ? false : true;
    this.sortTodoList();
  }

  deleteTodoItem(item) {
    if (item.id == this.todoList.length) {
      this.todoList.splice(item.id - 1, 1);
    } else {
      this.todoList.splice(item.id, 1);
    }
  }

  sortTodoList() {
    this.todoList.sort((a, b) => {
      return a.completed - b.completed;
    });
  }
}

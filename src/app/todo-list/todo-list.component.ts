import { Component, OnInit } from '@angular/core';
import { TASKS } from './mock-data';
import { IToDoItem } from './todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  items: IToDoItem[] = TASKS;

  constructor() { }

  done(item: IToDoItem): void {
    item.completed = true;
  }

  remove(item: IToDoItem): void {
    let isContinue = confirm("Do you want to delete this task?");

    if (isContinue) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
}

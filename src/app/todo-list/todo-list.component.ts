import { Component, OnInit } from '@angular/core';
import { TASKS } from './mock-data';
import { IToDoItem } from './todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  currentItem: IToDoItem = {
    name: "",
    date: new Date(),
    completed: false
  };
  items: IToDoItem[] = TASKS;

  constructor() { }

  create(): void {
    console.log("Creating...");

    // TODO: validations
    if (this.currentItem.name == "") {
      alert("Name is required!");
      return;
    }

    // add a copy of the currentItem to the items collection
    this.items.push({ ...this.currentItem });
  }

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

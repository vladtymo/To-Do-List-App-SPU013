import { AddPostComponent } from './posts/add-post/add-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'tasks', component: TodoListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add-post', component: AddPostComponent },
  //{ path: '*', component: UserListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

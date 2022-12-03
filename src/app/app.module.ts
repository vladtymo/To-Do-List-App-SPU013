import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { LaptopListComponent } from './laptops/laptop-list/laptop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UserListComponent,
    HeaderComponent,
    AddPostComponent,
    LaptopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

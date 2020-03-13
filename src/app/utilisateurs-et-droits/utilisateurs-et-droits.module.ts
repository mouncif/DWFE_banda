import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../material/material.module";
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user-list/user/user.component';
import { UserDetailComponent } from './users/user-list/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-list/user-edit/user-edit.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class UtilisateursEtDroitsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginGuard} from "../../../../core/guards/login.guard";
import {UserPostsComponent} from "./user-posts.component";


const routes: Routes = [
  {
    path: '',
    component: UserPostsComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPostsRoutingModule { }

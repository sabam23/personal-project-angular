import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./components/userpage.component";
import {LoginGuard} from "../../core/guards/login.guard";


const routes: Routes = [
  {
    path: '',
    component: UserpageComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }

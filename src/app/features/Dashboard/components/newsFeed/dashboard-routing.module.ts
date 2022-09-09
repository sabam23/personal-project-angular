import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsFeedComponent} from "./newsfeed.component";
import {LoginGuard} from "../../../../core/guards/login.guard";
import {UserpageComponent} from "../../../UserPage/components/userpage.component";

const routes: Routes = [
  {
    path: '',
    component: NewsFeedComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

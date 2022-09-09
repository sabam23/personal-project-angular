import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginGuard} from "../../../../core/guards/login.guard";
import {HistoryComponent} from "./history.component";


const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }

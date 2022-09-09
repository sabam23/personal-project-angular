import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginGuard} from "../../../../core/guards/login.guard";
import {MedicineComponent} from "./medicine.component";



const routes: Routes = [
  {
    path: '',
    component: MedicineComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule { }

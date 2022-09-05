import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login.component';
import {DashboardComponent} from "./features/Dashboard/components/dashboard.component";
import {LoginGuard} from "./core/guards/login.guard";
import {LogPageGuard} from "./core/guards/log-page.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogPageGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: DashboardComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

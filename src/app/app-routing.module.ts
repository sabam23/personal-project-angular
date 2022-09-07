import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login.component';
import {DashboardComponent} from "./features/Dashboard/components/Dashboard-Mainpage/dashboard.component";
import {LoginGuard} from "./core/guards/login.guard";
import {LogPageGuard} from "./core/guards/log-page.guard";
import {CoursesComponent} from "./features/Dashboard/components/courses/courses.component";
import {NotfoundComponent} from "./features/notfoundPage/components/notfound.component";

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
  },
  {
    path: 'student/courses',
    component: CoursesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

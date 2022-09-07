import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login.component';
import {LogPageGuard} from "./core/guards/log-page.guard";
import {NotfoundComponent} from "./features/notfoundPage/components/notfound.component";
import {NewsFeedComponent} from "./features/Dashboard/components/newsFeed/newsfeed.component";
import {LoginGuard} from "./core/guards/login.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LogPageGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'forum',
    component: NewsFeedComponent,
    // canActivate: [LoginGuard]
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

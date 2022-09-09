import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login.component';
import {LogPageGuard} from "./core/guards/log-page.guard";
import {NotfoundComponent} from "./features/notfoundPage/components/notfound.component";
import {LoginGuard} from "./core/guards/login.guard";
import {UserpageComponent} from "./features/UserPage/components/userpage.component";
import {PostDetailComponent} from "./features/postDetail/components/post-detail.component";

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
    path: 'forum/:postId',
    loadChildren: () =>  import('./features/postDetail/postDetail.module').then(m => m.PostDetailModule)
  },
  {
    path: 'user',
    loadChildren: () =>  import('./features/UserPage/userpage.module').then(m => m.UserPageModule)
  },
  {
    path: 'forum',
    loadChildren: () =>  import('./features/Dashboard/components/newsFeed/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'dashboard', loadChildren: () => import('./features/Dashboard/components/newsFeed/dashboard.module').then(m => m.DashboardModule) },
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

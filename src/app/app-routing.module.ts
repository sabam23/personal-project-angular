import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login.component';
import { LogPageGuard } from './core/guards/log-page.guard';
import { NotfoundComponent } from './features/notfoundPage/components/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogPageGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'forum/:postId',
    loadChildren: () =>
      import('./features/postDetail/postDetail.module').then(
        (m) => m.PostDetailModule
      ),
  },
  {
    path: 'data/:postId',
    loadChildren: () =>
      import(
        './features/Dashboard/components/user-posts/userPosts.module'
      ).then((m) => m.UserPostsModule),
  },
  {
    path: 'sports',
    loadChildren: () =>
      import('./features/Dashboard/components/sports/sports.module').then(
        (m) => m.SportsModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./features/Dashboard/components/history/history.module').then(
        (m) => m.HistoryModule
      ),
  },
  {
    path: 'programming',
    loadChildren: () =>
      import(
        './features/Dashboard/components/programming/programming.module'
      ).then((m) => m.ProgrammingModule),
  },
  {
    path: 'medicine',
    loadChildren: () =>
      import('./features/Dashboard/components/medicine/medicine.module').then(
        (m) => m.MedicineModule
      ),
  },
  {
    path: 'other',
    loadChildren: () =>
      import('./features/Dashboard/components/other/other.module').then(
        (m) => m.OtherModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/UserPage/userpage.module').then(
        (m) => m.UserPageModule
      ),
  },
  {
    path: 'forum',
    loadChildren: () =>
      import('./features/Dashboard/components/newsFeed/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/Dashboard/components/newsFeed/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

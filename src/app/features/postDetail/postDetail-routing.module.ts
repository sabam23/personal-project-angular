import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../../core/guards/login.guard';
import { PostDetailComponent } from './components/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostDetailComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailRoutingModule {}

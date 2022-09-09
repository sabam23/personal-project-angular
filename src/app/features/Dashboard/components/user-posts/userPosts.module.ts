import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UserPostsRoutingModule } from './userPosts-routing.module';
import { UserPostsComponent } from './user-posts.component';

@NgModule({
  declarations: [UserPostsComponent],
  imports: [
    CommonModule,
    UserPostsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class UserPostsModule {}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { LoginService } from '../../../shared/services/login.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: [
    './user-posts.component.scss',
    '../../../shared/styles/shared.styles.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostsComponent implements OnInit {
  constructor(
    public postService: PostService,
    public loginService: LoginService
  ) {}

  posts: Observable<Post[]> = new Observable<Post[]>();
  ngOnInit(): void {
    this.posts = this.postService.getUserPosts(this.postService.userID);
  }

  expand(id: number): void {
    let postData: Post;
    this.postService.postId = id;
    this.postService.getPost(id).subscribe((data) => {
      postData = data;
      postData.clicks += 1;
      this.postService.updateData(id, postData).subscribe();
    });
  }
}

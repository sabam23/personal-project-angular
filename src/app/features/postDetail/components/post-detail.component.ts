import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { tap } from 'rxjs';
import { Post } from '../../shared/interfaces/post.interface';
import { Comment } from '../interfaces/comment.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { CommentForm } from '../interfaces/commentForm.inteface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: [
    './post-detail.component.scss',
    '../../shared/styles/shared.styles.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef,
    public loginService: LoginService
  ) {}

  post: Post = {
    title: '',
    post: '',
    category: '',
    username: '',
    clicks: 0,
    comments: [],
    userId: 0,
    id: 0,
  };

  comments: Comment[] = [];

  commentForm = new FormGroup<CommentForm>(<CommentForm>{
    comment: new FormControl<string>('', [Validators.required]),
  });

  ngOnInit(): void {
    this.postService.getPost(this.postService.postId).subscribe((data) => {
      this.post = data;
      this.cdr.detectChanges();
      this.loadData();
    });
  }

  loadData() {
    this.postService
      .getPost(this.postService.postId)
      .pipe(
        tap((response) => {
          this.comments = response.comments;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  addComment() {
    let post: Post;
    let comment: Comment;
    this.postService.getPost(this.postService.postId).subscribe((data) => {
      post = data;
      comment = { username: '', comment: '' };
      comment.username = this.loginService.username.value;
      comment.comment = <string>this.commentForm.get('comment')?.value;
      post.comments.push(comment);
      this.postService
        .updateData(this.postService.postId, post)
        .subscribe((d) => {
          this.loadData();
        });
    });
  }
}

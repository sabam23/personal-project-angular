import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {PostForm} from "../../interfaces/postForm.interface";
import {Post} from "../../interfaces/post.interface";
import {Observable} from "rxjs";
import {LoginService} from "../../../login/services/login.service";
import {User} from "../../../login/interfaces/user.interface";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent implements OnInit {

  constructor(private postService: PostService,public loginService: LoginService) { }

  public posts$ = new Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.getFullData();
    this.loginService.currentUsername.subscribe();
  }

  postForm = new FormGroup<PostForm>(<PostForm>{
    title: new FormControl('', [Validators.required]),
    post: new FormControl('', [Validators.required]),
    category: new FormControl('sports', Validators.required),
  })

  addPost(category: string): void {
    let formValue = this.postForm.value;
    formValue.username = this.loginService.username.value;
    formValue.clicks = 0;
    formValue.comments = [];
    formValue.userId = this.loginService.loggedId;
    this.postService.addPost(formValue as Post, 'allPosts').subscribe(data => {
      this.posts$ = this.postService.getFullData();
    });
    this.postService.addPost(formValue as Post, category).subscribe();
    this.question = false;
    this.postForm.reset();
  }
  question: boolean = false;
}

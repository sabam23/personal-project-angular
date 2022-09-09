import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../shared/services/post.service";
import {PostForm} from "../../interfaces/postForm.interface";
import {Post} from "../../../shared/interfaces/post.interface";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {LoginService} from "../../../shared/services/login.service";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss', '../../../shared/styles/shared.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent implements OnInit {

  constructor(public postService: PostService,public loginService: LoginService) { }

  public posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([] as Post[]);

  searchForm = new FormControl('');

  ngOnInit(): void {
    this.loadData();
    this.loginService.currentUsername.subscribe();
  }

  expand(id:number): void {
    let postData: Post;
    this.postService.postId = id;
    this.postService.getPost(id).subscribe(data => {
      postData = data;
      postData.clicks += 1;
      this.postService.updateData(id,postData).subscribe()
    });
  }

  loadData() {
    this.postService.getFullData().pipe(
      tap(response => this.posts$.next(response))
    ).subscribe();
  }

  postForm = new FormGroup<PostForm>(<PostForm>{
    title: new FormControl('', [Validators.required]),
    post: new FormControl('', [Validators.required]),
    category: new FormControl('sports', Validators.required),
  })

  addPost(): void {
    let formValue = this.postForm.value;
    formValue.username = this.loginService.username.value;
    formValue.clicks = 0;
    formValue.comments = [];
    formValue.userId = this.loginService.loggedId;
    this.postService.addPost(formValue as unknown as Post).subscribe(d => {
      this.loadData();
    });
    this.question = false;
    formValue = {};
    this.postForm.reset();
  }
  question: boolean = false;
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {PostService} from "../../shared/services/post.service";
import {Post} from "../../shared/interfaces/post.interface";
import {LoginService} from "../../shared/services/login.service";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostForm} from "../../Dashboard/interfaces/postForm.interface";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss', '../../shared/styles/shared.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserpageComponent implements OnInit {

  constructor(private postService: PostService, public loginService: LoginService, private http: HttpClient) {
  }

  public posts = new BehaviorSubject<Post[]>([] as Post[]);

  ngOnInit(): void {
    this.postService.getUserPosts(this.loginService.loggedId).pipe(
      tap(response => this.posts.next(response))
    ).subscribe();
  }

  postEdit = new FormGroup<PostForm>(<PostForm>{
    title: new FormControl('', [Validators.required]),
    post: new FormControl('', [Validators.required]),
    category: new FormControl('sports', Validators.required),
  })

  expand(id:number): void {
    let postData: Post;
    this.postService.postId = id;
    this.postService.getPost(id).subscribe(data => {
      postData = data;
      postData.clicks += 1;
      this.postService.updateData(id,postData).subscribe()
    });
  }

  updatePost(): void {
    let formValue = this.postEdit.value;
    formValue.username = this.loginService.username.value;
    formValue.clicks = 0;
    formValue.comments = [];
    formValue.userId = this.loginService.loggedId;
    this.postService.updateData(this.postId, formValue as unknown as Post).subscribe(data => {
      this.postService.getUserPosts(this.loginService.loggedId).pipe(
        tap(response => this.posts.next(response))
      ).subscribe();
    })
    this.question = false
  }

  postId: number = 0;

  update(id: number): void {
    this.postService.getPost(id).subscribe(data => {
      this.postId = data.id;
      this.postEdit.get('title')?.setValue(data.title);
      this.postEdit.get('post')?.setValue(data.post);
      this.postEdit.get('category')?.setValue(data.category);
    })
    this.question = true;
  }

  question: boolean = false;

  deletePost(id:number): void {
    this.postService.deletePost(id).subscribe(data => {
      this.postService.getUserPosts(this.loginService.loggedId).pipe(
        tap(response => this.posts.next(response))
      ).subscribe();
    });
  }
}

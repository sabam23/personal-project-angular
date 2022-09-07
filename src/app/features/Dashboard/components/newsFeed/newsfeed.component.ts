import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {PostForm} from "../../interfaces/postForm.interface";
import {Post} from "../../interfaces/post.interface";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  postForm = new FormGroup<PostForm>(<PostForm>{
    title: new FormControl('', [Validators.required]),
    post: new FormControl('', [Validators.required]),
    category: new FormControl('sports', Validators.required)
  })

  addPost(category: string): void {
    this.postService.addPost(this.postForm.value as Post, category).subscribe();
    this.postService.addPost(this.postForm.value as Post, 'allPosts').subscribe();
    this.postForm.reset();
  }

  question: boolean = false;
}

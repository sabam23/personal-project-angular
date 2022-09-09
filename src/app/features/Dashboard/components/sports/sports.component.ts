import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {PostService} from "../../../shared/services/post.service";
import {BehaviorSubject, tap} from "rxjs";
import {Post} from "../../../shared/interfaces/post.interface";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss','../../../shared/styles/shared.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsComponent implements OnInit {

  constructor(public postService: PostService) { }

  public posts = new BehaviorSubject<Post[]>([] as Post[]);

  expand(id:number): void {
    let postData: Post;
    this.postService.postId = id;
    this.postService.getPost(id).subscribe(data => {
      postData = data;
      postData.clicks += 1;
      this.postService.updateData(id,postData).subscribe()
    });
  }

  ngOnInit(): void {
    this.postService.getCategoryPosts('sports').pipe(
      tap(response => this.posts.next(response))
    ).subscribe();
  }

}

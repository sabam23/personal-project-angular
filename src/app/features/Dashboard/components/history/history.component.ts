import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {Post} from "../../../shared/interfaces/post.interface";
import {PostService} from "../../../shared/services/post.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss', '../../../shared/styles/shared.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  constructor(private postService: PostService) { }

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
    this.postService.getCategoryPosts('history').pipe(
      tap(response => this.posts.next(response))
    ).subscribe();
  }

}

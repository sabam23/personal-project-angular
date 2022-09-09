import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {PostService} from "../../../shared/services/post.service";
import {BehaviorSubject, tap} from "rxjs";
import {Post} from "../../../shared/interfaces/post.interface";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss' , '../../../shared/styles/shared.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherComponent implements OnInit {

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
    this.postService.getCategoryPosts('other').pipe(
      tap(response => this.posts.next(response))
    ).subscribe();
  }

}

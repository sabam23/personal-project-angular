import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {PostService} from "../../Dashboard/services/post.service";
import {Post} from "../../Dashboard/interfaces/post.interface";
import {LoginService} from "../../login/services/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserpageComponent implements OnInit {

  constructor(private postService: PostService, public loginService: LoginService) {
  }

  public posts = new Observable<Post[]>;

  ngOnInit(): void {
    this.posts = this.postService.getUserPosts(this.loginService.loggedId);
  }
}

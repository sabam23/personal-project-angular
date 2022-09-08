import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../login/interfaces/user.interface";
import {Post} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3004/';

  addPost(payload: Post) {
    return this.http.post<Post>(`${this.baseUrl}posts`,payload);
  }

  getUserPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}posts?userId=${id}`);
  }

  deletePost(id:number) {
    return this.http.delete(`${this.baseUrl}posts/${id}`);
  }

  getFullData(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}posts`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public postId = 0;
  public userID = 0;
  private baseUrl = 'http://localhost:3004/';

  addPost(payload: Post) {
    return this.http.post<Post>(`${this.baseUrl}posts`, payload);
  }

  updateData(id: number, payload: Post) {
    return this.http.put(`${this.baseUrl}posts/${id}`, payload);
  }

  getUserPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}posts?userId=${id}`);
  }

  getCategoryPosts(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}posts?category=${category}`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}posts/${id}`);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.baseUrl}posts/${id}`);
  }

  getFullData(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.baseUrl}posts?_sort=clicks&_order=desc`
    );
  }
}

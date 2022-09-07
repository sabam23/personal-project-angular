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

  private baseUrl = 'http://localhost:3000/';

  addPost(payload: Post,category: string) {
    return this.http.post(`${this.baseUrl}${category}`,payload);
  }

  getStudentData(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/${id}`);
  }

  getFullData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }
}

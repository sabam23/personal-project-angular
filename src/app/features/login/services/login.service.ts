import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../interfaces/student.interface";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public isLoggedIn: boolean = false;
  private baseUrl = 'http://localhost:3000/';

  username = new BehaviorSubject<string>('');
  currentUsername = this.username.asObservable();

  changeName(username: string) {
    this.username.next(username);
  }

  addStudent(payload: Student) {
    return this.http.post(this.baseUrl+'students',payload);
  }

  getStudentData(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}students/${id}`);
  }

  getFullData(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}students`);
  }
}

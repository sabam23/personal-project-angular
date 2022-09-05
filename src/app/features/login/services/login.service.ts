import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../interfaces/student.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/';
  public userEmail = '';

  addStudent(payload: Student) {
    return this.http.post(this.baseUrl+'students',payload);
  }

  getStudentData(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}students?email=${this.userEmail}`);
  }

  getFullData(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}students`);
  }
}

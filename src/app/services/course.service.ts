import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Course} from "../model/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get<Partial<Course>[]>(`${environment.apiUrl}/course`);
  }
}

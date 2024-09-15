import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Course} from "../model/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http: HttpClient = inject(HttpClient);

  findAll() {
    return this.http.get<Partial<Course>[]>(`${environment.apiUrl}/course`);
  }

  findOne(id: number) {
    return this.http.get<Partial<Course>>(`${environment.apiUrl}/course/${id}`);
  }
}

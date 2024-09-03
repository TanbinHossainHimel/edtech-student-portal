import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AuthService} from "../services/auth.service";
import {CourseCardComponent} from "./course-card/course-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzButtonComponent,
    CourseCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  courses: Course[] = [
    {course_id: 1, course_name: 'Quantum Physics'},
    {course_id: 1, course_name: 'Quantum Physics'},
    {course_id: 1, course_name: 'Quantum Physics'},
    {course_id: 1, course_name: 'Quantum Physics'},
    {course_id: 1, course_name: 'Quantum Physics'},
    {course_id: 1, course_name: 'Quantum Physics'},
    {course_id: 1, course_name: 'Quantum Physics'},
  ];

  constructor(private authService: AuthService) {
  }

  onClickSignOut() {
    this.authService.signOutUser();
  }
}

interface Course {
  course_id: number;
  course_name: string;

}


import {Component, inject} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AuthService} from "../services/auth.service";
import {CourseCardComponent} from "./course-card/course-card.component";
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzButtonComponent,
    CourseCardComponent,
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private courseService = inject(CourseService);
  courses$ = this.courseService.getCourses();
}

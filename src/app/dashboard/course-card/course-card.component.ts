import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzRibbonComponent} from "ng-zorro-antd/badge";
import {NzCardComponent} from "ng-zorro-antd/card";
import {Course} from "../../model/course.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzRibbonComponent,
    NzCardComponent,
    RouterLink
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({required: true}) course!: Partial<Course>;
}

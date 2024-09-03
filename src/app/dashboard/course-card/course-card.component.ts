import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzRibbonComponent} from "ng-zorro-antd/badge";
import {NzCardComponent} from "ng-zorro-antd/card";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzRibbonComponent,
    NzCardComponent
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

}

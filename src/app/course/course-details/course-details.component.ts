import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  private activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  private courseService: CourseService = inject(CourseService);

  course$ = this.courseService.findOne(parseInt(this.activatedRouter.snapshot.paramMap.get('id')!));

  ngOnInit() {
  }

}

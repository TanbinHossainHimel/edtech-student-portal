import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {AsyncPipe} from "@angular/common";
import {NzCollapseComponent, NzCollapsePanelComponent} from "ng-zorro-antd/collapse";
import {VideoPlayerComponent} from "./video-player/video-player.component";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NzCollapsePanelComponent,
    NzCollapseComponent,
    VideoPlayerComponent
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

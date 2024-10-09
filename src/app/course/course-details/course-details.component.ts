import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {NzCollapseComponent, NzCollapsePanelComponent} from "ng-zorro-antd/collapse";
import {VideoPlayerComponent} from "../../shared/video-player/video-player.component";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NzCollapsePanelComponent,
    NzCollapseComponent,
    VideoPlayerComponent,
    JsonPipe,
    NzButtonComponent,
    NzModalModule
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  private activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  private courseService: CourseService = inject(CourseService);
  private modal: NzModalService = inject(NzModalService);

  course$ = this.courseService.findOne(parseInt(this.activatedRouter.snapshot.paramMap.get('id')!));

  ngOnInit() {
  }

  onClickBuyNow() {
    this.modal.create({
      nzTitle: 'Title',
      nzCentered: true,
    })
  }
}

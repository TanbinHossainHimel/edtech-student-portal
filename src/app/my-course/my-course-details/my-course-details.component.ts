import { Component } from '@angular/core';
import {VideoPlayerComponent} from "../../shared/video-player/video-player.component";
import {NzCollapseComponent, NzCollapsePanelComponent} from "ng-zorro-antd/collapse";
import {NzCardComponent} from "ng-zorro-antd/card";

@Component({
  selector: 'app-my-course-details',
  standalone: true,
  imports: [
    VideoPlayerComponent,
    NzCollapseComponent,
    NzCollapsePanelComponent,
    NzCardComponent
  ],
  templateUrl: './my-course-details.component.html',
  styleUrl: './my-course-details.component.scss'
})
export class MyCourseDetailsComponent {

}

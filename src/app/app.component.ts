import {Component, OnInit, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {environment} from "../environments/environment";
import {HeaderComponent} from "./header/header.component";
import {AuthService} from "./services/auth.service";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, HeaderComponent, NzAvatarComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isProduction: boolean = environment.isProduction;
  isUserAuthorized!: WritableSignal<boolean>;
  isCollapsed: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isUserAuthorized = this.authService.isUserAuthorized;
  }
}

import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {environment} from "../environments/environment";
import {EncryptDecryptService} from "./services/encrypt-decrypt.service";
import {LocalStorageService} from "./services/local-storage.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isProduction: boolean = environment.isProduction;

  constructor(private encryptDecryptService: EncryptDecryptService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.localStorageService.setData('name', 'Himel');
    const name = this.localStorageService.getData('name');
    console.log('name:', name);
  }
}

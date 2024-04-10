import {Component, EventEmitter, Output} from '@angular/core';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgOptimizedImage} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";

@Component({
  selector: 'app-google-auth-button',
  standalone: true,
  imports: [
    NzIconDirective,
    NgOptimizedImage,
    NzButtonComponent
  ],
  templateUrl: './google-auth-button.component.html',
  styleUrl: './google-auth-button.component.scss'
})
export class GoogleAuthButtonComponent {
  @Output() signInWithGoogle: EventEmitter<any> = new EventEmitter<any>();
  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement('div');
    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('custom-google-button');
    document.body.appendChild(googleLoginWrapper);
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200',
    });

    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton?.click();
      },
    };
  };

  handleGoogleSignIn() {
    this.signInWithGoogle.emit(this.createFakeGoogleWrapper());
  }
}

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          renderButton: any;
        }
      }
    }
  }
}

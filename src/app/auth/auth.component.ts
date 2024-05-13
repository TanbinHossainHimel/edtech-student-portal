import { Component } from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleAuthButtonComponent} from "./google-auth-button/google-auth-button.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    GoogleAuthButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private socialAuthService: SocialAuthService) {
    this.socialAuthService.authState.subscribe(socialUser => {
      console.log(socialUser);
    })
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }
}

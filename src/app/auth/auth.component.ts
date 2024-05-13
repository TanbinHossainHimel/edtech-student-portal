import { Component } from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {GoogleAuthButtonComponent} from "./google-auth-button/google-auth-button.component";
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "../services/auth.service";

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
  constructor(private socialAuthService: SocialAuthService, private authService: AuthService) {
    this.socialAuthService.authState.subscribe(socialUser => {
      console.log(socialUser);
      this.authService.signInWithGoogle();
    })
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }
}

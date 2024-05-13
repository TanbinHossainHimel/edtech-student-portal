import {Component, OnDestroy} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {GoogleAuthButtonComponent} from "./google-auth-button/google-auth-button.component";
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Subscription} from "rxjs";

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
export class AuthComponent implements OnDestroy {
  socialAuthStateSubscription!: Subscription;

  constructor(private socialAuthService: SocialAuthService, private authService: AuthService) {
    this.socialAuthStateSubscription = this.socialAuthService.authState.subscribe((socialUser: SocialUser) => {
      console.log(socialUser);
      if (socialUser) {
        this.authService.signInUserWithGoogle(socialUser);
      }
    });
  }

  ngOnDestroy() {
    this.socialAuthStateSubscription.unsubscribe();
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }
}

import {Component} from '@angular/core';
import {GoogleAuthButtonComponent} from "./google-auth-button/google-auth-button.component";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-google-auth',
  standalone: true,
  imports: [
    GoogleAuthButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.scss'
})
export class GoogleAuthComponent {
  constructor(private socialAuthService: SocialAuthService) {
    this.socialAuthService.authState.subscribe(socialUser => {
      console.log(socialUser);
    })
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }

}

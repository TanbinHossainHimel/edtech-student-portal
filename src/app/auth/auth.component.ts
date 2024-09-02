import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {GoogleAuthButtonComponent} from "./google-auth-button/google-auth-button.component";
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {concatMap, map, shareReplay, Subject, takeUntil, tap} from "rxjs";

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
export class AuthComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private socialAuthService: SocialAuthService = inject(SocialAuthService);
  private authService: AuthService = inject(AuthService);

  socialUser$ = this.socialAuthService.authState;
  auth$ = this.socialUser$.pipe(
    map(authPayload),
    concatMap((authPayload) => this.authService.signInUserWithGoogle(authPayload))
  );

  ngOnInit() {
    this.auth$.pipe(
      tap(console.log),
      shareReplay(),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  googleSignIn(googleWrapper: any) {
    googleWrapper.click();
  }
}

const authPayload = (socialUser: SocialUser) => {
  return {
    socialId: socialUser.id,
    name: socialUser.name,
    email: socialUser.email,
    photoUrl: socialUser.photoUrl,
    socialAuthProvider: socialUser.provider
  }
}

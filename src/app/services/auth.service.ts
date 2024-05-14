import {Injectable, signal, WritableSignal} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuthorized: WritableSignal<boolean> = signal(this.isAccessTokenAvailable());

  constructor(private localStorageService: LocalStorageService, private router: Router, private socialAuthService: SocialAuthService) {
  }

  signInUserWithGoogle(socialUser: SocialUser) {
    console.log(socialUser);
    this.localStorageService.setData('access-token', 'himel');
    this.isUserAuthorized.update(() => this.isAccessTokenAvailable());
    this.router.navigate(['dashboard']).then();
  }


  signOutUser() {
    this.localStorageService.removeData('access-token');
    this.isUserAuthorized.update(() => this.isAccessTokenAvailable());
    this.router.navigate(['auth']).then();
    this.socialAuthService.signOut().then();
  }

  isAccessTokenAvailable() {
    return !!this.localStorageService.getData('access-token');
  }
}

import {Injectable, signal, WritableSignal} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject(null);
  isUserAuthorized: WritableSignal<boolean> = signal(true);

  constructor(private localStorageService: LocalStorageService, private router: Router, private socialAuthService: SocialAuthService, private http: HttpClient) {
  }

  signInUserWithGoogle(socialUser: SocialAuthPayload) {
    return this.http.post<SocialAuthResponse>(environment.apiUrl + '/auth/sign-in', socialUser)
      .pipe(
        tap(console.log),
        tap((socialAuthResponse) => this.localStorageService.setData('access-token', socialAuthResponse.accessToken)),
        tap((socialAuthResponse) => this.localStorageService.setData('refresh-token', socialAuthResponse.refreshToken)),
      );
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


interface SocialAuthPayload {
  socialId: string;
  name: string;
  email: string;
  photoUrl: string;
  socialAuthProvider: string;
}

interface SocialAuthResponse {
  accessToken: string;
  refreshToken: string;
}

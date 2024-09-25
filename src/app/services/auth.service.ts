import {inject, Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, filter, map, Observable, shareReplay, tap} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorage: LocalStorageService = inject(LocalStorageService);
  private http: HttpClient = inject(HttpClient);

  private subject = new BehaviorSubject<User | null>(null);

  private user$: Observable<User | null> = this.subject.asObservable();

  isUserLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user));
  isUserLoggedOut$: Observable<boolean> = this.isUserLoggedIn$.pipe(map(isUserLoggedIn => !isUserLoggedIn));

  signIn(socialUser: SocialAuthPayload) {
    return this.http.post<AuthResponse>(environment.apiUrl + '/auth/sign-in', socialUser)
      .pipe(
        tap(console.log),
        filter(authResponse => this.isUserAuthorized(authResponse)),
        tap(authResponse => this.localStorage.setData('token', JSON.stringify(authResponse))),
        tap(autoResponse => this.subject.next(autoResponse)),
        shareReplay()
      );
  }

  isUserAuthorized(authResponse: AuthResponse) {
    return !!authResponse;
  }

  signOut() {
    this.subject.next(null);
    this.localStorage.removeData('token');
  }
}


interface SocialAuthPayload {
  socialId: string;
  name: string;
  email: string;
  photoUrl: string;
  socialAuthProvider: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

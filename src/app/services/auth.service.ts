import {inject, Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, filter, map, Observable, shareReplay, tap} from "rxjs";
import {User} from "../model/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorage: LocalStorageService = inject(LocalStorageService);
  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);

  private userSubject = new BehaviorSubject<User | null>(null);

  private user$: Observable<User | null> = this.userSubject.asObservable();

  isUserLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user));
  isUserLoggedOut$: Observable<boolean> = this.isUserLoggedIn$.pipe(map(isUserLoggedIn => !isUserLoggedIn));

  signIn(socialUser: SocialAuthPayload) {
    return this.http.post<AuthResponse>(environment.apiUrl + '/auth/sign-in', socialUser)
      .pipe(
        tap(console.log),
        filter(this.isUserAuthorized),
        tap(this.saveAuthToken),
        tap(this.redirectToDashboard),
        // tap(autoResponse => this.userSubject.next(autoResponse)),
        shareReplay()
      );
  }

  isUserAuthorized = (authResponse: AuthResponse) => {
    return !!authResponse;
  }

  signOut() {
    this.userSubject.next(null);
    this.localStorage.removeData('token');
  }

  saveAuthToken = (authResponse: AuthResponse) => {
    this.localStorage.setData('access-token', authResponse.accessToken);
    this.localStorage.setData('refresh-token', authResponse.refreshToken);
  }

  redirectToDashboard = () => {
    this.router.navigate(['/dashboard']).then();
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

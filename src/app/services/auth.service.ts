import {Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  signInWithGoogle() {
    this.localStorageService.setData('access-token', 'himel');
    this.router.navigate(['dashboard']).then();
  }

  get isUserAuthorized() {
    return !!this.localStorageService.getData('access-token');
  }


  signOutUser(){
    this.localStorageService.removeData('access-token');
  }
}

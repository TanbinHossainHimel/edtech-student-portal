import { HttpInterceptorFn } from '@angular/common/http';
import {LocalStorageService} from "../services/local-storage.service";
import {inject} from "@angular/core";

export const accessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalStorageService);
  req = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${localStorage.getData('access-token')}`)
  })
  return next(req);
};

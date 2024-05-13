import {Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'},
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
  {path: 'auth', loadComponent: () => AuthComponent}
];

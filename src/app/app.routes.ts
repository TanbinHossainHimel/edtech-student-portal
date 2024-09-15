import {Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {authGuard} from "./guards/auth.guard";
import {MyCoursesComponent} from "./my-courses/my-courses.component";
import {ExamComponent} from "./exam/exam.component";
import {CourseComponent} from "./course/course.component";
import {CourseDetailsComponent} from "./course/course-details/course-details.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
  {path: 'dashboard', loadComponent: () => DashboardComponent, canActivate: [authGuard]},
  {path: 'my-courses', loadComponent: () => MyCoursesComponent, canActivate: [authGuard]},
  {path: 'exam', loadComponent: () => ExamComponent, canActivate: [authGuard]},
  {path: 'course', loadComponent: () => CourseComponent},
  {path: 'course/:id', loadComponent: () => CourseDetailsComponent},
  {path: 'auth', loadComponent: () => AuthComponent}
];

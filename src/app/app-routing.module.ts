import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from 'src/app/core/services/auth-guard.service';
import { RedirectLoggedService  as RedirectLogged} from './core/services/redirect-logged.service';

const routes: Routes = [
  {path: '', redirectTo: '/login',  pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule), canActivate: [RedirectLogged]}, 
  { path: 'signup', loadChildren: () => import('./modules/auth/signup/signup.module').then(m => m.SignupModule), canActivate: [RedirectLogged]},
  { path: 'confirm', loadChildren: () => import('./modules/auth/confirm/confirm.module').then(m => m.ConfirmModule), canActivate: [RedirectLogged]},
  { path: 'dashboard', loadChildren: () => import('./modules/auth/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

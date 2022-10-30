import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from 'src/app/core/services/auth-guard.service';
import { RedirectLoggedService  as RedirectLogged} from './core/services/redirect-logged.service';

const routes: Routes = [
  // Auth Routes
  {path: '', redirectTo: '/login',  pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule), canActivate: [RedirectLogged]}, 
  { path: 'signup', loadChildren: () => import('./modules/auth/signup/signup.module').then(m => m.SignupModule), canActivate: [RedirectLogged]},
  { path: 'confirm', loadChildren: () => import('./modules/auth/confirm/confirm.module').then(m => m.ConfirmModule), canActivate: [RedirectLogged]},
  { path: 'dashboard', loadChildren: () => import('./modules/auth/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
  
  // Articles routes
  { path: 'articles', loadChildren: () => import('./modules/articles/articles-home/articles-home.module').then(m => m.ArticlesHomeModule), canActivate: [AuthGuard]},
  { path: 'articles/all', loadChildren: () => import('./modules/articles/articles/articles.module').then(m => m.ArticlesModule), canActivate: [AuthGuard]},
  { path: 'articles/all/add-article', loadChildren: () => import('./modules/articles/create-article/create-article.module').then(m => m.CreateArticleModule), canActivate: [AuthGuard]},
  { path: 'articles/all/create-macerate', loadChildren: () => import('./modules/articles/create-macerate/create-macerate.module').then(m => m.CreateMacerateModule), canActivate: [AuthGuard]},
  { path: 'articles/nutrional-complements', loadChildren: () => import('./modules/articles/nutritional-complement/nutritional-complement.module').then(m => m.NutritionalComplementModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesHomeComponent } from './articles-home.component';

const routes: Routes = [
  {path: '', component: ArticlesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesHomeRoutingModule { }

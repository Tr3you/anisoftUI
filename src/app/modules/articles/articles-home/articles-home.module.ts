import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesHomeRoutingModule } from './articles-home-routing.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ArticlesHomeComponent } from './articles-home.component';


@NgModule({
  declarations: [
    ArticlesHomeComponent
  ],
  imports: [
    CommonModule,
    ArticlesHomeRoutingModule,
    NzBreadCrumbModule
  ]
})
export class ArticlesHomeModule { }

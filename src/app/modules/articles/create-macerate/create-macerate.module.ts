import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMacerateRoutingModule } from './create-macerate-routing.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { CreateMacerateComponent } from './create-macerate.component';


@NgModule({
  declarations: [
    CreateMacerateComponent
  ],
  imports: [
    CommonModule,
    CreateMacerateRoutingModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class CreateMacerateModule { }

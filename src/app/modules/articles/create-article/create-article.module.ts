import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticleRoutingModule } from './create-article-routing.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CreateArticleComponent } from './create-article.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
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
export class CreateArticleModule { }

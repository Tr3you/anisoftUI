import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionalComplementRoutingModule } from './nutritional-complement-routing.module';
import { NutritionalComplementComponent } from './nutritional-complement.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [
    NutritionalComplementComponent
  ],
  imports: [
    CommonModule,
    NutritionalComplementRoutingModule,
    NzBreadCrumbModule,
    NzInputModule,
    FormsModule,
    NzTableModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    NzDividerModule
  ]
})
export class NutritionalComplementModule { }

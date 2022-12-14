import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {  NzDropDownModule } from 'ng-zorro-antd/dropdown';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzDropDownModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

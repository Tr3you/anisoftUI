import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }

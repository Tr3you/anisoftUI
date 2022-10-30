import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMacerateComponent } from './create-macerate.component';

const routes: Routes = [
  {path: '', component: CreateMacerateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMacerateRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionalComplementComponent } from './nutritional-complement.component';

const routes: Routes = [
  {path: '', component: NutritionalComplementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionalComplementRoutingModule { }

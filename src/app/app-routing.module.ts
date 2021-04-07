import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuarterbacksComponent } from './quarterbacks/quarterbacks.component';

const routes: Routes = [
{ path: '', component: QuarterbacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

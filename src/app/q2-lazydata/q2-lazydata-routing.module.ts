import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q2LazydataComponent } from './q2-lazydata.component';

const routes: Routes = [{ path: '', component: Q2LazydataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Q2LazydataRoutingModule { }

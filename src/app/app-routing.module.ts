import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q3RouteGuardComponent } from './q3-route-guard/q3-route-guard.component';
import { Q1ChildComponent } from './q1-child/q1-child.component';
import { Q4PageComponentComponent } from './q4-page-component/q4-page-component.component'


const routes: Routes = [
  { path: 'q2-lazydata-list', loadChildren: () => import('./q2-lazydata/q2-lazydata.module').then(mod => mod.Q2LazydataModule) },
  { path: 'q2-lazydata2-list', loadChildren: () => import('./q2-lazydata2/q2-lazydata2.module').then(m => m.Q2Lazydata2Module) },
  { path: 'q3-route-guard', component: Q1ChildComponent, canActivate: [Q3RouteGuardComponent] },
  { path: 'q4-page', component: Q4PageComponentComponent },
  { path: '', redirectTo: '/q4-page', pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

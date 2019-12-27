import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q2Lazydata2RoutingModule } from './q2-lazydata2-routing.module';
import { Q2Lazydata2Component } from './q2-lazydata2.component';


@NgModule({
  declarations: [Q2Lazydata2Component],
  imports: [
    CommonModule,
    Q2Lazydata2RoutingModule
  ]
})
export class Q2Lazydata2Module { }

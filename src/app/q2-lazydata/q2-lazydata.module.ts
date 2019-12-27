import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q2LazydataRoutingModule } from './q2-lazydata-routing.module';
import { Q2LazydataComponent } from './q2-lazydata.component';


@NgModule({
  declarations: [Q2LazydataComponent],
  imports: [
    CommonModule,
    Q2LazydataRoutingModule
  ]
})
export class Q2LazydataModule { }

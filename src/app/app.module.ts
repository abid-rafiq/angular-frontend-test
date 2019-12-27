import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1ChildComponent } from './q1-child/q1-child.component';
import { Q3RouteGuardComponent } from './q3-route-guard/q3-route-guard.component';
import { Q4PageComponentComponent } from './q4-page-component/q4-page-component.component';
import { Q8NgcontentComponent } from './q8-ngcontent/q8-ngcontent.component';
// For Currency Masking
// import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    Q1ChildComponent,
    Q3RouteGuardComponent,
    Q4PageComponentComponent,
    Q8NgcontentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // NgxCurrencyModule
  ],
  providers: [ Q3RouteGuardComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

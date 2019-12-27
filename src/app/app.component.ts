import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import Inputmask from "inputmask";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('left', style({
        left: '0px',
        opacity: 1,
      })),
      state('center', style({
        left: 'calc(50% - 75px)', // center of 150px
        opacity: 0.5,
      })),
      state('center-right', style({
        right: 'calc(50% - 75px)', // center of 150px
        opacity: 0.5,
      })),
      state('right', style({
        right: '0px',
        opacity: 0.5,
      })),
      transition('* => center', [
        animate('1s')
      ]),
      transition('* => left', [
        animate('0.5s')
      ]),

      transition('* => center-right', [
        animate('1s')
      ]),
      transition('* => right', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnChanges {
  @Input() data: boolean;
  title = 'angular-frontend-test';
  formData = null;
  userName = '';
  isAnimated = false;
  isAnimatedCSS = false;
  fullname = null;
  email = null;
  formattedMoney = null;

  constructor(private router: Router) {
  }

  appDataUpdate(){
    if (this.data === true) {
      this.data = false;
    } else {
      this.data = true;
    }
  }

  sendDatatoRoute() {
    this.formData = this.userName;

    this.router.navigate(['/q4-page', { data: this.formData, foo: 'foo' }]);
  }

  startAngularAnimation() {
    if (this.isAnimated === true) {
      this.isAnimated = false;
    } else {
      this.isAnimated = true;
    }
  }

  startCssAnimation() {
    if (this.isAnimatedCSS === true) {
      this.isAnimatedCSS = false;
    } else {
      this.isAnimatedCSS = true;
    }
  }

  isEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  formatMoney(money) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    const moneyFormatted = money.replace( /^\D+/g, '');

    this.formattedMoney = formatter.format(moneyFormatted);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit() {
    let selector = document.getElementById('mask-it');
    let im = new Inputmask("99-9999999");
    im.mask(selector);
  }
}

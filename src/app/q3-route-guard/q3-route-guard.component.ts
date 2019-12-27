import { Component, OnInit, Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-q3-route-guard',
  templateUrl: './q3-route-guard.component.html',
  styleUrls: ['./q3-route-guard.component.sass']
})
export class Q3RouteGuardComponent implements CanActivate {
  @Input() appDataFromChanges: boolean;

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // on true the url in the top url bar is change
    return true;
    // on false the url in the top url bar doesn't change
    // return false;
  }

}

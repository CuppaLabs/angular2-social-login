import { Component } from '@angular/core';
import { AuthService }      from './auth.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular 2 OAuth Example</h1>
    <button (click)="logout()" *ngIf="authService.isLoggedIn()">Logout</button>
    <h1 *ngIf="authService.loading">Logging in.. Please Wait...</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    constructor(public authService: AuthService) {
  }
  logout() {
    this.authService.logout();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
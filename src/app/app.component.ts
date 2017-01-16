import { Component } from '@angular/core';
import { AuthService }      from './auth.service';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
          <img alt="Brand" src="assets/img/cuppa-logo.png">
          Cuppa OAuth2</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    <div class="jumbotron">
      <div class="container">
        <h2 class="title">Angular2 OAuth2</h2> 
        <h3 class="sub-title"> Social Login Demo</h3>
          <h1 *ngIf="authService.loading">Logging in.. Please Wait...</h1>
          <router-outlet></router-outlet>
      </div>
    </div>

  `
})
export class AppComponent {
    constructor(public authService: AuthService) {
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
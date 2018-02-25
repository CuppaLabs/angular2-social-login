import { Component } from '@angular/core';
import { AuthService }      from './cuppaOAuth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="jumbotron">
      <div class="container">
        <h2 class="title">Angular2 OAuth2</h2> 
        <h3 class="sub-title"> Social Login Demo</h3>
          <router-outlet></router-outlet>
      </div>
    </div>

  `
})
export class AppComponent {
    constructor() {
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
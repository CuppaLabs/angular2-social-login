import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { AuthService }      from './auth.service';
import { ActivatedRoute }       from '@angular/router';

@Component({
  template: `
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
      <button (click)="googleLogin()" class="btn btn-block btn-social btn-google">
          <span class="fa fa-google"></span> Sign in with Google
      </button>
      <button (click)="facebookLogin()" class="btn btn-block btn-social btn-facebook">
          <span class="fa fa-facebook"></span> Sign in with Facebook
      </button>
      <button (click)="linkedinLogin()" class="btn btn-block btn-social btn-linkedin">
          <span class="fa fa-linkedin"></span> Sign in with LinkedIn
      </button>
      </div>
    </div>`
})
export class LoginComponent {
  message: string;
  clientId = "8866df478d05617ba354";
  redirectURI = "http://localhost:3000/admin";
  code: string;
  mywindow: Window;
  constructor(private route: ActivatedRoute, public authService: AuthService, public router: Router) {
  }
  linkedinLogin() {
    this.authService.auth('linkedin');
  }
  facebookLogin(){
    this.authService.auth('facebook');
  }
  googleLogin(){
    this.authService.auth('google');
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
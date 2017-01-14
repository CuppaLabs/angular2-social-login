import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { AuthService }      from './auth.service';
import { ActivatedRoute }       from '@angular/router';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>
      <button (click)="linkedinLogin()">LinkedIn</button>
      <button (click)="facebookLogin()">Facebook</button>
      <button (click)="googleLogin()">Google</button>
    </p>`
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
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService }          from '../cuppaOAuth/auth.service';
import { LoginComponent }       from './login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
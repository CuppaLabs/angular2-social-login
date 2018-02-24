import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { PreloadSelectedModules } from '../selective-preload-strategy';
import {AdminService} from './admin.services'
import { User } from './profile.interface';
import { AuthService }      from '../cuppaOAuth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  template:  `
    <div class="row col-md-8 col-md-offset-2 profile-section">
    <div class="col-md-8">
      <div class="col-md-12 profile-header">
        <div class="col-md-1 provider-logo" [ngClass]="{'fb': user.provider == 'facebook', 'google': user.provider == 'google','linkedin': user.provider == 'linkedin' }">
          <span *ngIf=" user.provider == 'facebook'" class="fa fa-facebook"></span>
          <span *ngIf=" user.provider == 'google'" class="fa fa-google"></span>
          <span *ngIf=" user.provider == 'linkedin'" class="fa fa-linkedin"></span>
        </div>
        <div class="col-md-9"><b>Welcome</b> {{ user.displayName}}</div> 
        <div class="col-md-2"><a class="logout-btn" (click)="logout()" *ngIf="authService.isLoggedIn()">Logout</a></div>
      </div>
      <table class="table"> 
      <tbody> 
      <tr> <td><b>User ID:</b></td> <td> {{ user._id}}</td> </tr> 
      <tr><td><b>Name:</b></td> <td> {{ user.displayName}}</td> </tr> 
      <tr><td><b>Email:</b></td> <td>{{ user.email}}</td> </tr> 
       <tr><td><b>Provider:</b></td> <td>{{ user.provider}}</td> </tr> 
        <tr><td><b>Provider ID:</b></td> <td>{{ user.provider_id}}</td> </tr> 
      </tbody> 
      </table>
    </div>
    <div class="col-md-4">
      <img src="{{ user.picture}}" />
    </div>
    </div>
    
    
  `
})
export class AdminDashboardComponent implements OnInit {
  public user:User = new User();
  constructor(public adminService: AdminService, public authService: AuthService) {
    
  }

  ngOnInit() {
    this.getUserProfile();
  }
  getUserProfile() {
        
        this.adminService.getProfile().subscribe(
                                profile => {
                                    console.log(profile);
                                    console.log(this.user = new User(profile._id, profile.displayName, profile.email, profile.picture,profile.provider,profile.provider_id));
                                    //this.

                                }, 
                                err => {
                                    console.log(err);
                                });
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
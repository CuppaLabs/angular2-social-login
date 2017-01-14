import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { PreloadSelectedModules } from '../selective-preload-strategy';
import {AdminService} from './admin.services'
import { User } from './profile.interface';

import 'rxjs/add/operator/map';

@Component({
  template:  `
    <p>User ID: {{ user._id}}</p>
    <p>Name: {{ user.displayName}}</p>
    <p>Email: {{ user.email}}</p>
    <img src="{{ user.picture}}" />
    <p>Provider: {{ user.provider}}</p>
    <p>Provider ID: {{ user.provider_id}}</p>
    
  `
})
export class AdminDashboardComponent implements OnInit {
  private user:User = new User();
  constructor(private adminService: AdminService) {
    
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
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
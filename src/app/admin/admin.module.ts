import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import {AdminService} from './admin.services'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule {}
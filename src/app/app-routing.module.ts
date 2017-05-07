import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthService }          from './cuppaOAuth/auth.service';
import { PreloadSelectedModules } from './selective-preload-strategy';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: LoginComponent },
  { 
    path: 'login', 
    component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        canActivateChild: [AuthService],
        children: [
          { 
            path: '', 
            component: AdminDashboardComponent 
          }
        ]
      }
    ]
  },
  {
    path:'projects', 
    component: ProjectsComponent, 
    canActivate:[AuthService] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PreloadSelectedModules
  ]
})
export class AppRoutingModule {}
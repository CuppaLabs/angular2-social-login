import { Component } from '@angular/core';
import { AuthService }      from '../cuppaOAuth/auth.service';

@Component({
  template:  `
  <h1>Projects Page</h1>
  <button (click)="logout()">logout</button>
  `
})
export class ProjectsComponent {
  constructor(private authService: AuthService ){

  }
  public logout(){
    this.authService.logout();
  }
}

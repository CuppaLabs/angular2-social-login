import { Component, Input }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { AuthService }      from './auth.service';
import { ActivatedRoute }       from '@angular/router';

@Component({
  selector:'cuppa-oauth',
  template: `
    <div class="row">
      <div class="col-md-4 " style="margin: 0px auto;">
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
    </div>`,
   styleUrls: ['./auth-styles.css']
})
export class cuppaOAuth {

 @Input()
 authConfig: any;

  constructor(public authService: AuthService) {
  }
  linkedinLogin() {
    this.authService.auth('linkedin',this.authConfig);
  }
  facebookLogin(){
    this.authService.auth('facebook',this.authConfig);
  }
  googleLogin(){
    this.authService.auth('google',this.authConfig);
  } 
}
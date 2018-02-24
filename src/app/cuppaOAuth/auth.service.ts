import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { InterceptorService } from 'ng2-interceptors';
import {  Router,Route, NavigationStart, 
          Event as NavigationEvent, 
          NavigationCancel,
          RoutesRecognized,
          CanActivate,CanActivateChild,CanLoad,
          ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate, CanActivateChild, CanLoad {

  public configObj = {"authEndpoint":"","clientId":"","redirectURI":""};
  public code:string;
  public cachedURL:string;
  public loginProvider: string;
  public loading: boolean;
  public loginURI: string;
  constructor(private _http: InterceptorService,private router:Router, private location: Location) {
    let config = localStorage.getItem("authConfig");
    let provider = localStorage.getItem("provider");
    let cachedURL = localStorage.getItem('cachedurl');
    let params = new URLSearchParams(this.location.path(false).split('?')[1]);
    this.code = params.get('code');  

    if(config){
      this.configObj = JSON.parse(config)[provider];
      this.loginURI =  JSON.parse(config).loginRoute;
    }
    if(provider){
      this.loginProvider =  provider;
    }
    if(cachedURL){
      this.cachedURL = cachedURL;
    }
    if(this.code){
      this.login(this.code,this.configObj.clientId,this.configObj.redirectURI, this.configObj.authEndpoint)
      .then((data:any) => {
          this.loading = false;
          this.router.navigate([this.cachedURL]);
              return true;
          });
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;  
    return this.verifyLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.verifyLogin(url);
  }

  login(code:any,clientId:any,redirectURI:any,authEndpoint:any):Promise<any>{
    
    var body = {"code" : code,"clientId" : clientId,"redirectUri":redirectURI}

    return this._http.post(authEndpoint,body,{})
    .toPromise()
     .then((r: Response) => { 
              localStorage.setItem('isLoggedIn', "true");
              localStorage.setItem('token', r.json().token);
              return r.json()
      })
      .catch(this.handleError);;
   // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = localStorage.getItem('isLoggedIn'));
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  logout(): void {
    localStorage.setItem('isLoggedIn',"false");
    localStorage.removeItem('token');
    localStorage.removeItem('cachedurl');
    localStorage.removeItem('provider');
     this.router.navigate([this.loginURI]);
  }
  verifyLogin(url):boolean{
     
    if(!this.isLoggedIn() && this.code == null){
      localStorage.setItem('cachedurl',url);
      this.router.navigate([this.loginURI]);
      return false;
    }
    else if(this.isLoggedIn()){
      return true;
    }
    else if(!this.isLoggedIn()  && this.code != null){
       let params = new URLSearchParams(this.location.path(false).split('?')[1]);
       if(params.get('code') && (localStorage.getItem('cachedurl') == "" || localStorage.getItem('cachedurl') == undefined)){
          localStorage.setItem('cachedurl',this.location.path(false).split('?')[0]);
       }    
       if(this.cachedURL != null || this.cachedURL != ""){
          this.cachedURL = localStorage.getItem('cachedurl');
       }
    }
  }
  public isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
  public auth(provider:string, authConfig: any):void{
    
    localStorage.setItem("authConfig",JSON.stringify(authConfig));
    localStorage.setItem("provider",provider);

    if(provider == "linkedin" && !this.isLoggedIn()){ 
      window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id='+authConfig.linkedin.clientId+'&redirect_uri='+authConfig.linkedin.redirectURI+'&response_type=code';
  }
   if(provider == "facebook" && !this.isLoggedIn()){ 
       window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id='+authConfig.facebook.clientId+'&redirect_uri='+authConfig.facebook.redirectURI+'&scope=email';
  }
   if(provider == "google" && !this.isLoggedIn()){ 
       window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id='+authConfig.google.clientId+'&redirect_uri='+authConfig.google.redirectURI+'&scope=email%20profile';
  }
    else{
        this.router.navigate([this.cachedURL]);
    }
  }

}
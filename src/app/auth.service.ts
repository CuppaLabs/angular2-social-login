import { Injectable } from '@angular/core';
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

 private authConfig = {

   "linkedin":{
     "authEndpoint":"https://murmuring-waters-53650.herokuapp.com/auth/linkedin",
     "clientId":"8176r44lz2ewos",
     "redirectURI" : "https://murmuring-waters-53650.herokuapp.com/admin"
   },
   "facebook":{
     "authEndpoint":"https://murmuring-waters-53650.herokuapp.com/auth/facebook",
     "clientId":"929055083862567",
     "redirectURI" : "https://murmuring-waters-53650.herokuapp.com/admin"
   },
   "google":{
     "authEndpoint":"https://murmuring-waters-53650.herokuapp.com/auth/google",
     "clientId":"77954512562-eftl8up04q1g3aha2mjg5h6bgel9svkk.apps.googleusercontent.com",
     "redirectURI" : "https://murmuring-waters-53650.herokuapp.com/admin"
   }

 };
  private configObj = {"authEndpoint":"","clientId":"","redirectURI":""};
  private code:string;
  private cachedURL:string;
  
  private loading: boolean;
  constructor(private _http: InterceptorService,private router:Router) {
    let config = localStorage.getItem("authConfig");
    if(config != ""){
      this.configObj = JSON.parse(config);
    }
       router.events.forEach((event: NavigationEvent) => {
    if(event instanceof RoutesRecognized) {
        let params = new URLSearchParams(event.url.split('?')[1]);
        this.code = params.get('code');  
        if(event.url.split('?')[0] == "/login" && this.isLoggedIn()){
            this.router.navigate([localStorage.getItem('cachedurl')]);
        }
    }
  });
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
     this.router.navigate(['/login']);
  }
  verifyLogin(url):boolean{
     localStorage.setItem('cachedurl',url.split('?')[0]);
     this.cachedURL = localStorage.getItem('cachedurl');
    if(!this.isLoggedIn() && this.code == null){
      this.router.navigate(['/login']);
      return false;
    }
    else if(this.isLoggedIn()){
      return true;
    }
    else if(!this.isLoggedIn()  && this.code != null){
      this.loading = true;
      this.login(this.code,this.configObj.clientId,this.configObj.redirectURI,this.configObj.authEndpoint)
      .then((data:any) => {
          this.loading = false;
          this.router.navigate([this.cachedURL]);
              return true;
          });
    }
  }
  private isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
  public auth(provider:string):void{
    if(provider == "linkedin" && !this.isLoggedIn()){
      localStorage.setItem("authConfig",JSON.stringify(this.authConfig.linkedin));
      window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id='+this.authConfig.linkedin.clientId+'&redirect_uri='+this.authConfig.linkedin.redirectURI+'&response_type=code';
  }
   if(provider == "facebook" && !this.isLoggedIn()){ 
      localStorage.setItem("authConfig",JSON.stringify(this.authConfig.facebook));
       window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id='+this.authConfig.facebook.clientId+'&redirect_uri='+this.authConfig.facebook.redirectURI+'&scope=email';
  }
   if(provider == "google" && !this.isLoggedIn()){ 
      localStorage.setItem("authConfig",JSON.stringify(this.authConfig.google));
       window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id='+this.authConfig.google.clientId+'&redirect_uri='+this.authConfig.google.redirectURI+'&scope=email%20profile';
  }
    else{
        this.router.navigate([this.cachedURL]);
    }
  }

}
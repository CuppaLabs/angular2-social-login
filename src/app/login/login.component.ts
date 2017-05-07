import { Component }        from '@angular/core';

@Component({
  template: `
    <div class="row">
      <cuppa-oauth [authConfig]="config"></cuppa-oauth>
    </div>`
})
export class LoginComponent {
   private authServerBaseUrl = 'https://cuppa-angular2-oauth.herokuapp.com';
   private config = {
   "loginRoute":"login",
   "linkedin":{
     "authEndpoint": this.authServerBaseUrl+"/auth/linkedin",
     "clientId":"8176r44lz2ewos",
     "redirectURI" : "http://localhost:5000/admin"
   },
   "facebook":{
     "authEndpoint": this.authServerBaseUrl+"/auth/facebook",
     "clientId":"929055083862567",
     "redirectURI" : "http://localhost:5000/admin"
   },
   "google":{
     "authEndpoint": this.authServerBaseUrl+"/auth/google",
     "clientId":"77954512562-eftl8up04q1g3aha2mjg5h6bgel9svkk.apps.googleusercontent.com",
     "redirectURI" : "http://localhost:5000/admin"
   }
 };
}

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule,XHRBackend, RequestOptions  } from '@angular/http';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent }       from './login/login.component';
import { ProjectsModule } from './projects/projects.module';

import { CuppaOAuthModule } from './cuppaOAuth/cuppaOAuth.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpModule,
    AdminModule,
    ProjectsModule,
    CuppaOAuthModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
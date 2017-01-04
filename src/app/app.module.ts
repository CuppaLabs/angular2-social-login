import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule,XHRBackend, RequestOptions  } from '@angular/http';
import { InterceptorService } from 'ng2-interceptors';
import { ServerURLInterceptor } from './interceptor';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';

import { DialogService }        from './dialog.service';
import {WindowService} from "./window.service";

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor:ServerURLInterceptor){ // Add it here
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor); // Add it here
  return service;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginRoutingModule,
    AppRoutingModule, 
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    DialogService,
    WindowService,
     ServerURLInterceptor, // Add it here
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor] }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
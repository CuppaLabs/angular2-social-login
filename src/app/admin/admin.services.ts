import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User }           from './profile.interface';
import {Observable} from 'rxjs/Rx';
import { InterceptorService } from 'ng2-interceptors';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {
     // Resolve HTTP using the constructor
     constructor (private _http: InterceptorService) {
         
     }
     private commentsUrl = 'https://murmuring-waters-53650.herokuapp.com/api/profile'; 
     
getProfile() : Observable<any> {

         // ...using get request
         return this._http.get(this.commentsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}
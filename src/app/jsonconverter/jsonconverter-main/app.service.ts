import { HttpClient, HttpErrorResponse, HttpResponse, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { InputForm } from './InputForm';
import { Observable } from 'rxjs';

@Injectable()
export class JSONService {

    constructor(private http: HttpClient) { }
url : string="https://techlearnings.in:33298/bf/validate";
  
    validatejson(model: string): Observable<any> {
//alert("inside service");
        const httpOptions = { 
          headers: new HttpHeaders(
            { 'Content-Type': 'application/json' }
          ) 
        };
        //alert(model);
        console.log(model);
      return  this.http.post(this.url, model, httpOptions);
  
   
     
      }

}
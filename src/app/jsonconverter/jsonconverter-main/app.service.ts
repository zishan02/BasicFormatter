import { HttpClient, HttpErrorResponse, HttpResponse, JsonpClientBackend } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { InputForm } from './InputForm';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class JSONService {
  
    constructor(private http: HttpClient) { }
url : string="http://54.252.182.108:8080/validate";
    validatejson(model: string): Observable<any> {
//alert("inside service");
        const httpOptions = { 
          headers: new HttpHeaders(
            { 
              'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*' }
          ) 
        };
        //alert(model);
        console.log(model);
    
      return  this.http.post(this.url, model, httpOptions);
  
   
     
      }
      private mySubjectSource = new Subject<any>();
      myObservable=this.mySubjectSource.asObservable();

      private clearSource = new Subject<any>();
      clearObservable=this.clearSource.asObservable();

      sendValue(value:any)
      {
        this.mySubjectSource.next(value);
      }

      clearValue(value:any)
      {
        this.clearSource.next(value);
      }
 
}
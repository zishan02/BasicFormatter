import { HttpErrorResponse } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { JSONService } from './app.service';
import { InputForm } from './InputForm';


@Component({
  selector: 'app-jsonconverter-main',
  templateUrl: './jsonconverter-main.component.html',
  styleUrls: ['./jsonconverter-main.component.css']
})
export class JsonconverterMainComponent {
  constructor(public service :JSONService ){
  
  }
   test: string="";
   temp : string="";
   model =new InputForm("");
   SubmitButton(data :any) :  void{
    this.model=new InputForm(data.text);
    this.service.validatejson(this.model.text).subscribe(
 data =>{ this.temp=data
   this.test="VALID";
 },
 error => {
 if(error instanceof HttpErrorResponse){
 //console.log(error.error.text);
   this.temp=error.error.text;
   this.test="INVALID";
 }
 
 }
 );}
}

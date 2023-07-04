import { HttpErrorResponse } from '@angular/common/http';
import { Component, Output, ViewChild } from '@angular/core';
import { JsonConverterMidgridComponent } from '../json-converter-midgrid/json-converter-midgrid.component';
import { JSONService } from './app.service';
import { InputForm } from './InputForm';


@Component({
  selector: 'app-jsonconverter-main',
  templateUrl: './jsonconverter-main.component.html',
  styleUrls: ['./jsonconverter-main.component.css']
})
export class JsonconverterMainComponent {
  @ViewChild(JsonConverterMidgridComponent)
  child!: JsonConverterMidgridComponent;
  ngAfterViewInit(){
    console.log(this.child);
 }
  constructor(public service :JSONService
    ){
  }
   test: string="";
   temp : string="";
   model =new InputForm("");
   SubmitButton(data :any) :  void{
     this.child.startLoader();
    this.model=new InputForm(data.text);
    this.service.validatejson(this.model.text).subscribe(
 data =>{ 
console.log(data);
  this.temp=data;
  //this.jsonconvertermid.loading=true;
  //this.jsonconvertermid.endLoader();
   this.test="VALID";
 },
 error => {
 if(error instanceof HttpErrorResponse){
 console.log(error.error.text);
  this.temp=error.error.text;
   this.child.endLoader();
   //console.log("Error" +this.jsonconvertermid.loading);
   this.test="INVALID";
 }
 
 }
 );}

}

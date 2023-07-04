import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JsonConverterMidgridComponent } from '../json-converter-midgrid/json-converter-midgrid.component';
import { JSONService } from '../jsonconverter-main/app.service';
import { InputForm } from '../jsonconverter-main/InputForm';
import { JsonconverterMainComponent } from '../jsonconverter-main/jsonconverter-main.component';

@Component({
  selector: 'app-json-converter-input',
  templateUrl: './json-converter-input.component.html',
  styleUrls: ['./json-converter-input.component.css']
})
export class JsonConverterInputComponent extends JsonconverterMainComponent implements OnInit {
  
  @Output() submitEvent=new EventEmitter<any>();
  @Output() ngSubmit=new EventEmitter<any>();
  @ViewChild('myForm') myForm: NgForm | undefined;
 
  callParent(data :InputForm):void {
console.log(data.text);
    this.submitEvent.emit(data);
  }
   ngOnInit()
  {
    this.service.myObservable.subscribe(res=>{
      this.myForm?.ngSubmit.emit();
    })
    this.service.clearObservable.subscribe(res=>{
      this.myForm?.reset();
    })

   
  } 
}

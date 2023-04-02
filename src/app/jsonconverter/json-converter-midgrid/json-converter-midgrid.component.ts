import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JSONService } from '../jsonconverter-main/app.service';

@Component({
  selector: 'app-json-converter-midgrid',
  templateUrl: './json-converter-midgrid.component.html',
  styleUrls: ['./json-converter-midgrid.component.css']
})
export class JsonConverterMidgridComponent {
@Output() testevent=new EventEmitter<null>();

constructor(private service:JSONService){}

onClick()
{
  this.service.sendValue("av");
} 

onClear(){

  this.service.clearValue("clear");
}
}

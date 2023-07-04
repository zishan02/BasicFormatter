import { ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs';
import { JSONService } from '../jsonconverter-main/app.service';

@Component({
  selector: 'app-json-converter-midgrid',
  templateUrl: './json-converter-midgrid.component.html',
  styleUrls: ['./json-converter-midgrid.component.css']
})
export class JsonConverterMidgridComponent implements OnInit{
  cd: any;
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  private loading :boolean=false;

  setLoading(loading:boolean){
this.loading=loading

  }
  
  getLoading():boolean{
    return this.loading;
  }
@Output() testevent=new EventEmitter<null>();

constructor(cd: ChangeDetectorRef,private service:JSONService) {
  this.cd=cd;
}

updateItem():void {
  this.loading=true;
  console.log("Method Update Item called");
  this.cd.detectChanges();
}
updateItemFalse():void {
  this.loading=false;
  console.log("Method Update Item called");
  this.cd.detectChanges();
}
async onClick()
{
console.log(this.loading);
this.startLoader();
  this.service.sendValue("av");
  console.log("value after true ->"+this.loading);
  console.log("Value"+this.loading);  
  //this.setLoading(false);
  //this.updateItemFalse();
console.log("Falae"+this.loading);
  //delay (15000);
  //console.log("send vak"+this.loading);
//this.endLoader();
//this.loading=false;
} 

onClear(){
  //this.service.clearValue("clear");
}

endLoader(){
this.updateItemFalse();
}
async startLoader(){
 
   this.updateItem();

}
}

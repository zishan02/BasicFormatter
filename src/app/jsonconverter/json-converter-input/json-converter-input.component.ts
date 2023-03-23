import { Component, EventEmitter, Output } from '@angular/core';
import { InputForm } from '../jsonconverter-main/InputForm';
import { JsonconverterMainComponent } from '../jsonconverter-main/jsonconverter-main.component';

@Component({
  selector: 'app-json-converter-input',
  templateUrl: './json-converter-input.component.html',
  styleUrls: ['./json-converter-input.component.css']
})
export class JsonConverterInputComponent extends JsonconverterMainComponent {

  @Output() submitEvent=new EventEmitter<any>();

  
  
  callParent(data :InputForm):void {
console.log(data.text);
    this.submitEvent.emit(data);
  }

}

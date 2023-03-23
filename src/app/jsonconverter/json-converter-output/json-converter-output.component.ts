import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-converter-output',
  templateUrl: './json-converter-output.component.html',
  styleUrls: ['./json-converter-output.component.css']
})
export class JsonConverterOutputComponent {

  @Input() temp :string="";
  @Input() result:string="";

}

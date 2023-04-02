import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-converter-output',
  templateUrl: './json-converter-output.component.html',
  styleUrls: ['./json-converter-output.component.css']
})
export class JsonConverterOutputComponent {

  @Input() temp :String ='';
  @Input() result:string='';

}

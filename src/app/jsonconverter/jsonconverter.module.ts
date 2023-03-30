import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { JsonconverterMainComponent } from './jsonconverter-main/jsonconverter-main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JSONService } from './jsonconverter-main/app.service';
import { JsonConverterOutputComponent } from './json-converter-output/json-converter-output.component';
import { JsonConverterSidebarComponent } from './json-converter-sidebar/json-converter-sidebar.component';
import { JsonConverterInputComponent } from './json-converter-input/json-converter-input.component';
import { JsonConverterHeaderComponent } from './json-converter-header/json-converter-header.component';
import { JsonConverterMidgridComponent } from './json-converter-midgrid/json-converter-midgrid.component';


const route: Routes = [
  {path :'',component:JsonconverterMainComponent}
  ];

@NgModule({
  declarations: [JsonconverterMainComponent,JsonConverterOutputComponent,JsonConverterSidebarComponent,JsonConverterInputComponent,JsonConverterHeaderComponent, JsonConverterMidgridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    HttpClientModule

  ],
  exports:[JsonconverterMainComponent],
  providers: [JSONService],
})
export class JSONConverterModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path :'timer',loadChildren:()=> import ('./timer/timer.module').then(m=>m.TimerModule)},
{path :'jsonconverter',loadChildren:()=> import ('./jsonconverter/jsonconverter.module').then(m=>m.JSONConverterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

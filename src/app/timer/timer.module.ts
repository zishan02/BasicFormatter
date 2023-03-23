import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { RouterModule, Routes } from '@angular/router';

const test: Routes = [
  {path :'',component:TimerComponent}
  ];
  

@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(test)
  ],
})
export class TimerModule { }

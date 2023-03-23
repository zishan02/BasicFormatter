import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  public now: Date = new Date();
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
}
}

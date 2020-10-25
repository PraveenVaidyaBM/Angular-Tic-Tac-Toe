import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: // defining colors for the each player input along with styling start game button
    `<button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="primary" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="warning" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {
  // assigning intial value of two players as X and O
  @Input() value : 'X' | 'O'
}

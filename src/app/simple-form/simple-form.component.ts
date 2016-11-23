import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    <input #myInput type="text" [(ngModel)]="message">
    <button (click)="onClick(myInput.value)">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
@Input() message;

  onClick(value) {
    console.log('value ' + value);
  }


  constructor() { }

  ngOnInit() {
  }

}

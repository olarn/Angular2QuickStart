import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "my-header",
  template: `
      <h1 (click)="changeToGreen()" [style.color]="color">{{title}}</h1>
  `
})

export class HeaderComponent {
  @Input() color: string;
  @Input() title: string;
  @Output() colorEvent: EventEmitter<string> = new EventEmitter<string>();

  changeToGreen() {
    this.colorEvent.emit('green');
  }
}
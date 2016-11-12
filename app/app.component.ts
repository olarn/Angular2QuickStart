import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <my-header [color]="color" [title]="title" (colorEvent)="changeColor($event)"></my-header>
        <p [style.color]="color">This is my first Angular 2.</p>
        <button (click)="toggleColor()">Toggle Color</button>
        <input type="text" [(ngModel)]="value"/>
        <p>{{ value }}</p>
        <my-list></my-list>
    `
})

export class AppComponent { 
    title = "Hello Angular 2";
    color = "red";
    value = "test";

    toggleColor() {
        this.color = this.color == "green" ? "red" : "green";
    }

    changeColor(color: string) {
        this.color = color;
    }
}

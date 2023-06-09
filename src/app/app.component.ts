import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Directives!!!';
  desc: string = `Angular Directives are classes or function that add additional
                behavior to DOM elements within your Angular application.
              `

  players: any[] = [
    { "id": 1, "name": "Sachin T", "age": "43" },
    { "id": 2, "name": "MS Dhoni", "age": "40" },
    { "id": 3, "name": "Virat K", "age": "38" }
  ];
}

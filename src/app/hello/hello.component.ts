import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
              <h3>Hello Component Works!</h3>
           `
})
export class HelloComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}

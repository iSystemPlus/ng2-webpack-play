import { Component } from '@angular/core';

//console.log('async List');

@Component({
  selector: 'index',
  template: `
    <h1>Hello, List Here</h1>
  `
})
export class List {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `List` component');
  }
}
import { Component } from '@angular/core';

//console.log('async DEATILS');

@Component({
  selector: 'index',
  template: `
    <h1>Hello from Detail</h1>
    <span>
      <a [routerLink]=" ['./list'] ">
        List
      </a>
    </span>    
  `
})
export class Index {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Index` component');
  }
}
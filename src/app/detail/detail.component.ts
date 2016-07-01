import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'detail',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <div style='border: 1px solid red; padding:10px'>
      <div>---- Start Routes HERE ----</div>
    <router-outlet></router-outlet>
    </div>
  `
})
export class Detail {
  constructor() {
 
  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }
}
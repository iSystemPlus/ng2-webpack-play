import { Component } from '@angular/core';

import { NavItem, NavItemChild }     from './nav.item.component';

/* nav.service.promise.ts Promise */
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Rx';
import { NavService }     from './nav.service.promise';

/* nav.service.ts Observable */
//import { NavService }     from './nav.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Nav` component loaded asynchronously');

@Component({
  selector: 'nav',
  styles: [`
  `],
  template: `
    <div>
      <div *ngFor="let N of navList">
        &nbsp;
        <a [routerLink]=" [N.link] ">
          {{ N.name }}
        </a>
        &nbsp;
        -
        <span *ngFor="let N2 of N.child">
        &nbsp;
        <a [routerLink]=" [N2.link] ">
          {{ N2.name }}
        </a>
        &nbsp;
        </span>
      </div>
    </div>
    <!-- {{ navList | json }} -->
    <div>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </div>
  `
  , providers: [ NavService ]
})

export class Nav {
  errorMessage: string;
  navList: NavItem[];

  mode = 'Promise';
  //mode = 'Observable';

  constructor (private navService: NavService) {
//    this.navList = [];
//    this.navList.push({link: './', name: 'Index', child : []});
//    this.navList.push({link: './home', name: 'Home', child : []});
//    this.navList.push({link: './detail', name: 'Detail',
//                       child : [
//                                { link: './detail/list', name: 'List'}
//                               ]
//                      });
//    this.navList.push({link: './about', name: 'About'});
  }

  ngOnInit() {
    this.getNav();
  }

  getNav() {
    if(this.mode == 'Promise'){
      this.navService.getNav().then(  navList => this.navList = navList,
                                      error =>  this.errorMessage = <any>error);
    }else if(this.mode == 'Observable'){
      /*
      this.navService.getNav().subscribe(   navList => this.navList = navList,
                                            error =>  this.errorMessage = <any>error);
      */
    }
  }

}

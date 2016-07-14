import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Nav` component loaded asynchronously');

export class NavItem {
  link: String;
  name: String;
}

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
  //, providers: [ Http ]
})

export class Nav {

  navList: NavItem[];

  constructor(private http: Http) {
    this.navList = [];
    this.navList.push({link: './', name: 'Index'});
    this.navList.push({link: './home', name: 'Home'});
    this.navList.push({link: './detail', name: 'Detail',
                       child : [
                                { link: './detail/list', name: 'List' }
                               ]
                      });
    this.navList.push({link: './about', name: 'About'});
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  test() {
    /*
    console.log('start get json file');
    console.log(this.http.get('assets/nav/nav.json').map(response => this.extractData));
    console.log('end get json file');
    */
  }

  ngOnInit() {
    console.log('hello `Nav` component');
    console.log(this.navList);
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}

// Promise Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { NavItem, NavItemChild }     from './nav.item.component';

@Injectable()
export class NavService {
  // URL to web api
  private navUrl = 'assets/nav/nav.json';

  constructor (private http: Http) {}

  getNav (): Promise<NavItem[]> {
    return this.http.get(this.navUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }
//
//  addHero (name: string): Promise<Hero> {
//    let body = JSON.stringify({ name });
//    let headers = new Headers({ 'Content-Type': 'application/json' });
//    let options = new RequestOptions({ headers: headers });
//
//    return this.http.post(this.heroesUrl, body, options)
//               .toPromise()
//               .then(this.extractData)
//               .catch(this.handleError);
//  }
//
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
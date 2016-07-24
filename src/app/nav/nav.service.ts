// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { NavItem, NavItemChild }     from './nav.item.component';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NavService {
  constructor (private http: Http) {}

  // URL to web api
  private navUrl = 'assets/nav/nav.json';

  getNav (): Observable<NavItem[]> {
    return this.http.get(this.navUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

/*
  addHero (name: string): Observable<Hero> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
*/

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
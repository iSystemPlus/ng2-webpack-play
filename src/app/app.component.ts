/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Nav } from './nav/nav.component';

/*
 * App Component
 * Top Level Component
 */
var $ = require('jquery');
window.jQuery = $;

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  /* styleUrls: ['./app.style.css'], */
  styles: [
    require('./app.style.css'),
    require('normalize.css'),
    require('bootstrap-material-design/dist/css/bootstrap-material-design.css')
  ],
  template: `
    <nav></nav>

    <div class="bs-component">
      <div class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="javascript:void(0)">Brand<div class="ripple-container"></div></a>
          </div>
          <div class="navbar-collapse collapse navbar-responsive-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="javascript:void(0)">Active</a></li>
              <li><a href="javascript:void(0)">Link<div class="ripple-container"></div></a></li>
              <li class="dropdown">
                <a href="bootstrap-elements.html" data-target="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropdown
                  <b class="caret"></b><div class="ripple-container"></div></a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li class="divider"></li>
                  <li class="dropdown-header">Dropdown header</li>
                  <li><a href="javascript:void(0)">Separated link</a></li>
                  <li><a href="javascript:void(0)">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form navbar-left">
              <div class="form-group is-empty">
                <input type="text" class="form-control col-md-8" placeholder="Search">
              </div>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="javascript:void(0)">Link</a></li>
              <li class="dropdown">
                <a href="bootstrap-elements.html" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown
                  <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0)">Action</a></li>
                  <li><a href="javascript:void(0)">Another action</a></li>
                  <li><a href="javascript:void(0)">Something else here</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0)">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>

  <div class="form-group label-static">
    <label for="i2" class="control-label">label-static</label>
    <input type="email" class="form-control" id="i2" placeholder="placeholder attribute">
    <p class="help-block">This is a hint as a <code>p.help-block.hint</code></p>
  </div>
 
  <div class="form-group label-floating">
    <label for="i5" class="control-label">label-floating</label>
    <input type="email" class="form-control" id="i5">
    <span class="help-block">This is a hint as a <code>span.help-block.hint</code></span>
  </div>
 
  <div class="form-group label-placeholder">
    <label for="i5p" class="control-label">label-placeholder</label>
    <input type="email" class="form-control" id="i5p">
    <span class="help-block">This is a hint as a <code>span.help-block.hint</code></span>
  </div>

  `,
  directives: [Nav]
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

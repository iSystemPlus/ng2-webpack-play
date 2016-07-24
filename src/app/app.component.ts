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
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  /* styleUrls: ['./app.style.css'], */
  styles: [
    require('./app.style.css'),
    require('normalize.css')
    //, require('bootstrap-material-design/dist/css/bootstrap-material-design.css')
  ],
  template: `
    <nav></nav>

    <button md-button>FLAT</button>
    <button md-raised-button>RAISED</button>
    <button md-icon-button>
       <md-icon class="md-24">favorite</md-icon>
    </button>
    <button md-fab>
       <md-icon class="md-24">add</md-icon>
    </button>
    <button md-mini-fab>
       <md-icon class="md-24">add</md-icon>
    </button>

    <div class="row">
      <div class="col-md-3">1</div>
      <div class="col-md-3">2</div>
      <div class="col-md-3">3</div>
      <div class="col-md-3">4</div>
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

import {Component} from '@angular/core'

import {Globals} from './globals'

@Component({
  selector: 'component1',
  template: `
    <div>
      Component 1
      <br />
      <br />
      global role: <b>{{globals.role}}</b>
    </div>
  `
})
export class Component1 {
  globals: Globals;

  // no private and no public, so we need to make an assignment explicitly
  // to provide an access on the template layer
  constructor(globals: Globals) {
    this.globals = globals;
  }
}
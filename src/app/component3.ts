import {Component} from '@angular/core'

import {Globals} from './globals'

@Component({
  selector: 'component3',
  template: `
    <div>
      Component 3
      <br />
      <br />
      Global role value
      <b>{{globals.role === 'test' ? 'is' : 'is not'}}</b>
      "test"
    </div>
  `
})
export class Component3 {
  // define as public to provide an access on the template layer
  constructor(public globals: Globals) {
  }
}
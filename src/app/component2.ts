import {Component} from '@angular/core'

import {Globals} from './globals'

@Component({
  selector: 'component2',
  template: `
    <div>
      Component 2
      <br />
      <br />
      <input [(ngModel)]="role" />
      <button (click)="changedRole()">apply</button>
    </div>
  `
})
export class Component2 {
  private role: string;
  
  // define as private for the template don't want to access it
  // also private definition would allow it to be accessible via 'this' in the changedRole method
  constructor(private globals: Globals) {
    this.role = globals.role;
  }
  
  private changedRole() {
    this.globals.role = this.role;
  }
}
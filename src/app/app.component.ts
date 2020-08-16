//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string;
  
  constructor() {
    this.title = `Angular v${VERSION.full}`;
  }
}
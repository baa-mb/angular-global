import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Globals } from './globals';

import { Component1 } from './component1';
import { Component2 } from './component2';
import { Component3 } from './component3';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    Component1,
    Component2,
    Component3
  ],
  providers: [ Globals ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

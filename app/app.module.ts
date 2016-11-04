import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component'

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],  //todo insert formsmodule routermodule and httpmodule
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector:   'my-app',
  template: `
    <h1>{{title}}</h1>
    <ngb-rating [(rate)]='currentAmount'></ngb-rating>
    <h2>Fyrsti notandi {{currentuser}}</h2>
    `
})



export class AppComponent { 
    title = 'Jafna';
    currentuser = 'Gamli';
    currentAmount = '10';
}

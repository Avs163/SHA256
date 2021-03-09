import { Component, OnInit } from '@angular/core';
import { Sha256 } from './sha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'SHA';
  value = '';

  constructor() { }



  addTodo(message:string) {
    // var abc = require('sha256');
    // console.log(abc(value));
    this.value = Sha256.hash(message);
  }

}



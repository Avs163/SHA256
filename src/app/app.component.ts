import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SHA';
  value = '';
  constructor() { }

  addTodo(value:string) {
    var abc = require('sha256');
    // console.log(abc(value));
    this.value = abc(value);
  }
}

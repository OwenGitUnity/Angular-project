import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `.stylecolor{
      color: blue
    }`
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

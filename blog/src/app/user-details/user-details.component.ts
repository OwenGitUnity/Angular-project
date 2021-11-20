import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
interface Gender{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  // gender: Gender[]= [
  //   {value: 'steak-0', viewValue: 'Female'},
  //   {value: 'pizza-1', viewValue: 'Male'},
  //   {value: 'tacos-2', viewValue: 'Private'},
  // ]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

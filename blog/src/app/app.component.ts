import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'Hello angular';
 public  data="hello code";
 getVal(){
   return "Code Step by Step"
   
 }
 num = 100;
 getData(val: string){
  console.log(val);
  
 }
}

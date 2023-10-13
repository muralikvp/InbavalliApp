import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private firstNo!:number;
  private SecondNo:number = 100;
  private result:string = "Hope";
  private resultArr:string[] = ["Hope","Tutors"];


  private responsedata:any;

  // firstno = 10
  // firstno =null


}

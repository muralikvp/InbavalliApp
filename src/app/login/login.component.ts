import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private firstNo!: number;
  private SecondNo: number = 100;
  private result: string = 'Hope';
  private resultArr: string[] = ['Hope', 'Tutors'];
  private responsedata: any;

  constructor(private auth:AuthService){

  }

  Login = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    password: new FormControl('', Validators.required),
  });

  ProceedLogin() {
    if (this.Login.valid) {
      this.auth.proceedLogin(this.Login.value).subscribe(result => {
        console.log("Sucess");
      } );

      console.log("Valid Login");
    }
    else
    {
      console.log("Invalid Login");
    }
  }
}

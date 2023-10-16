import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiurl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  proceedLogin(UserCred: any)
  {
    return this.http.post(this.apiurl,UserCred);
  }
}

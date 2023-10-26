import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  proceedLogin(UserCred: any) {
    return this.http.post(this.apiurl, UserCred);
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  HaveAccess() {
    var role = localStorage.getItem('Role') || '';
    if (role == 'Admin') {
      return true;
    }
    else
    {
      alert('you are not having access');
      return false;
    }
  }
  getToken(){
    return localStorage.getItem('token') || '';
  }
}

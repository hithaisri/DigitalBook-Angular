import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './book.service';
import AuthResponse from './entity/AuthResponse';
import LoginRequest from './entity/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth: LoginRequest = new LoginRequest();
  loginResponse: AuthResponse = new AuthResponse();

  constructor(public bookService: BookService, private router: Router) { }

 

  isAuthorLoggedIn() {
    let user = sessionStorage.getItem('username');
    let role = sessionStorage.getItem('role');
    let flag = false;
    if (!(role === null) && (role === "" + 1)) {
      console.log(!(user === null))
      flag = !(user === null);
    }
    return flag;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

    isReaderLoggedIn() {
      let user = sessionStorage.getItem('username');
      let role = sessionStorage.getItem('role');
      let flag = false;
      if (!(role === null) && (role === "" + 2)) {
        console.log(!(user === null))
        flag = !(user === null);
      }
    return flag;
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}

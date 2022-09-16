import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import AuthResponse from 'src/app/entity/AuthResponse';
import LoginRequest from 'src/app/entity/LoginRequest';
import User from 'src/app/entity/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display = "none";

  user: User = new User();

  auth:LoginRequest=new LoginRequest();
  loginResponse:AuthResponse=new AuthResponse();

  loginUser(){
    const observable = this.bookService.userLogin(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/addbook']);
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
  }

  checkUserLogin(){
    this.bookService.login(this.auth).subscribe(
      resp=>{
        this.loginResponse=resp;
        if(resp.role===1){
          console.log("Author login");
          sessionStorage.setItem('role',""+resp.role);
          sessionStorage.setItem('username',resp.user.userName);
          this.router.navigate(['/navbar']);
        }
        else if(resp.role===2){
          console.log("Reader login");
          sessionStorage.setItem('role',""+resp.role);
          sessionStorage.setItem('username',resp.user.userName);
          this.router.navigate(['/showBook']);
        }
      },
      err=>{
        this.loginResponse=err;
        alert(this.loginResponse.message);
      }
    )
  }

 
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  constructor(public bookService: BookService, private router : Router) { }

  ngOnInit(): void {
  }

}

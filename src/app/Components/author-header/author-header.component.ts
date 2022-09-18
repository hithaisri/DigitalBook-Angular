import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { BookService } from 'src/app/book.service';
import AuthResponse from 'src/app/entity/AuthResponse';
import LoginRequest from 'src/app/entity/LoginRequest';

@Component({
  selector: 'app-author-header',
  templateUrl: './author-header.component.html',
  styleUrls: ['./author-header.component.css']
})
export class AuthorHeaderComponent implements OnInit {
 
  display = "none";

  auth:LoginRequest=new LoginRequest();
  loginResponse:AuthResponse=new AuthResponse();

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  refresh(){
    window.location.reload();
  }
  checkUserLogin(){
    this.bookService.login(this.auth).subscribe(
      resp=>{
        this.loginResponse=resp;
        if(resp.role===1){
          console.log("Author login");
          sessionStorage.setItem('role',""+resp.role);
          sessionStorage.setItem('username',resp.user.userName);
          sessionStorage.setItem('userId',""+resp.user.userId);
          this.onCloseHandled();
        }
        else if(resp.role===2){
          console.log("Reader login");
          sessionStorage.setItem('role',""+resp.role);
          sessionStorage.setItem('username',resp.user.userName);
          sessionStorage.setItem('userId',""+resp.user.userId);
          this.onCloseHandled();
        }
      },
      err=>{
        this.loginResponse=err;
        alert(this.loginResponse.message);
      }
    )
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  constructor(public authService:AuthenticationService,public bookService:BookService) { }

  ngOnInit(): void {
  }

}

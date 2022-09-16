import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import User from 'src/app/entity/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();

  display = "none";

  signupUser(){
    const observable = this.bookService.saveUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert(response);
        this.router.navigate(['/home']);
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
  }

  loginUser(){
    const observable = this.bookService.userLogin(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response); 
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
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

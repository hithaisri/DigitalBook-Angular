import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import User from 'src/app/entity/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display = "none";

  user: User = new User();

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

  routcheck(){
    this.router.navigate(['/showBook']);
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

import { Component, OnInit } from '@angular/core';
import Book  from 'src/app/entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  title = "Fill all the fields below "

book: Book = new Book();

books: Book[] = [];

  save() {
    let userId=sessionStorage.getItem('userId');
    this.book.authorId=parseInt(userId);
    const observable = this.bookService.saveBook(this.book);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert(response);
        window.location.reload();
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
  }

  
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }

}

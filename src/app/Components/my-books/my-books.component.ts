import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  books: Book[] = [];

  book: Book =new Book();

  display = "none";

  contentText= "";


  openModal(content:string) {
    this.contentText=content;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    const observable = this.bookService.getBooksByReader();
    observable.subscribe((response: any)=>{
      this.books = response as Book[];
    })
  }

}

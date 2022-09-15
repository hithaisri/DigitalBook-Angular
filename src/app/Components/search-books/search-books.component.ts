import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  books: Book[] = [];
  
  book: Book = new Book();


  searchBook(){
    const observable = this.bookService.searchBooks(this.book);
    observable.subscribe((response: any)=>{
      this.books.splice(0);
      console.log(response);
      this.books = response as Book[];
    })
  }

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }

}

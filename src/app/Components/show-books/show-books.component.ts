import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {
 
  books: Book[] = [];

  book: Book =new Book();

  deleteRow(book, index) {
    const observable = this.bookService.deleteBook(book);
    observable.subscribe((response:any) => {
      console.log(response);
      this.books.splice(index,1)
    })
  }
  
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    const observable = this.bookService.getBooks();
    observable.subscribe((response: any)=>{
      this.books = response as Book[];
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';
import CartItem from 'src/app/entity/CartItem';

@Component({
  selector: 'app-show-books-reader',
  templateUrl: './show-books-reader.component.html',
  styleUrls: ['./show-books-reader.component.css']
})
export class ShowBooksReaderComponent implements OnInit {

  books: Book[] = [];

  book: Book =new Book();

  addToCart(){
    console.log(`book name: ${this.book.title}, and price: ${this.book.price}`);
    const cartItem = new CartItem(this.book);
    this.bookService.addToCart(cartItem);
  }

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    const observable = this.bookService.getBooksByAuthor();
    observable.subscribe((response: any)=>{
      this.books = response as Book[];
    })
  }

}

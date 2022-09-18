import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';
import CartItem from 'src/app/entity/CartItem';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  books: Book[] = [];

  book: Book = new Book();
  
  display = "none";

  contentText= "";


  openModal(content:string) {
    this.contentText=content;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  deleteRow(book, index) {
    const observable = this.bookService.deleteBook(book);
    observable.subscribe((response: any) => {
      console.log(response);
      this.books.splice(index, 1)
    })
  }

  addToCart() {
    console.log(`book name: ${this.book.title}, and price: ${this.book.price}`);
    const cartItem = new CartItem(this.book);
    this.bookService.addToCart(cartItem);
  }

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    let userId= sessionStorage.getItem('userId');
      const observable = this.bookService.getBooksByAuthor(userId);
      observable.subscribe((response: any) => {
        this.books = response as Book[];
      })
    }
}

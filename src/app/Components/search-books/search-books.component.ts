import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';
import CartItem from 'src/app/entity/CartItem';
import SeachBook from 'src/app/entity/SearchBook';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  books: Book[] = [];
  
  book: Book = new Book();

  searchBook: SeachBook=new SeachBook();

  searchBooks(){
    const observable = this.bookService.searchBooks(this.searchBook);
    observable.subscribe((response: any)=>{
      this.books.splice(0);
      console.log(response);
      this.books = response as Book[];
    })
    
  }

  addToCart(s){
    console.log(`book name: ${s.title}, and price: ${s.price}`);
    const cartItem = new CartItem(s);
    this.bookService.addToCart(cartItem);
  }


  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }

}

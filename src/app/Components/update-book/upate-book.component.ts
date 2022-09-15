import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-upate-book',
  templateUrl: './upate-book.component.html',
  styleUrls: ['./upate-book.component.css']
})
export class UpateBookComponent implements OnInit {

  books: Book[] = [];
  book: Book = new Book();
  id: number = 0;

  deleteAllRows() {
    const observable = this.bookService.deleteAllBooks();
    observable.subscribe((response) => {
      console.log(response);
      alert("All Books Deleted");
      window.location.reload();
    })
  }

  updateBook(st, j) {

    console.log(st.id);
    this.book.id = st.id;
    this.book.title = st.title;
    this.book.publisher = st.publisher;
    this.book.publishedDate=st.publishedDate;
    this.book.author=st.author;
    this.book.price = st.price;
    this.book.category = st.category;
    this.book.content = st.content;
    this.book.active= st.active;
    this.book.image= st.image;
  
  }

  update(book) {

    console.log(book);
    const observable = this.bookService.updateStudent(this.book.id, this.book);
    observable.subscribe(
      (response: any) => {
        console.log(response)
        alert("Book Updated");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      });
      
    window.location.reload()
  }

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
    const observable = this.bookService.getBooks();
    observable.subscribe((response: any)=>{
      this.books = response as Book[];
    })
  }

}

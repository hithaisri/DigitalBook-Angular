import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  paramUrl: string = "";

  saveBook(book: {
    id: number;
    title: string;
    category: string;
    publisher: string;
    price: number;
    content: string;
    image: string;
    active: boolean;
  }) {
    return this.http.post(BASE_URL + "/book/saveBook", book, { responseType: "text" });
  }

  getBooks() {
    return this.http.get(BASE_URL + "/book/getAllBooks");
  }

  deleteBook(book: any) {
    return this.http.delete(BASE_URL + "/book/deleteBook/" + book.id, { responseType: "text" });
  }

  saveUser(user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    role: number;
  }) {
    return this.http.post(BASE_URL + "/user", user, { responseType: "text" });
  }

  userLogin(user) {
    return this.http.post(BASE_URL + "/user/login", user, { responseType: "text" });
  }

  searchBooks(book) {

    if (typeof book.title === "string" && book.title.trim().length != 0)
      this.paramUrl = "/book/search?title=" + book.title;
    else if (typeof book.publisher === "string" && book.publisher.trim().length != 0)
      this.paramUrl = "/book/search?publisher=" + book.publisher;
    else if (book.price > 0)
      this.paramUrl = "/book/search?price=" + book.price;

      return this.http.get(BASE_URL + this.paramUrl );
  }

  constructor(public http: HttpClient) { }
}
